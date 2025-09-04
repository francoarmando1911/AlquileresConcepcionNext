import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/database';
import User from '@/app/lib/Models/User';
import { generateToken } from '@/app/lib/utils/auth';
import { validateRegisterData } from '@/app/lib/utils/validation';
import { RegisterData, AuthResponse, ErrorResponse, UserResponse } from '@/app/lib/types';

export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse | ErrorResponse>> {
    try {
        await connectDB();

        const body: RegisterData = await request.json();
        const { nombre, email, password, telefono } = body;

        // Validar datos
        const validation = validateRegisterData(body);
        if (!validation.isValid) {
            return NextResponse.json(
                { message: validation.message! },
                { status: 400 }
            );
        }

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json(
                { message: 'El usuario ya existe' },
                { status: 400 }
            );
        }

        // Crear usuario
        const user = await User.create({
            nombre,
            email,
            password,
            telefono
        });

        // Generar token
        const token = generateToken(user._id.toString());

        // Responder sin password
        const userResponse: UserResponse = {
            _id: user._id.toString(),
            nombre: user.nombre,
            email: user.email,
            telefono: user.telefono,
            role: user.role
        };

        return NextResponse.json(
            {
                message: 'Usuario registrado exitosamente',
                user: userResponse,
                token
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}