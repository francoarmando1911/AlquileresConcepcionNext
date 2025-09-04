import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/database';
import User from '@/app/lib/Models/User';
import { generateToken } from '@/app/lib/utils/auth';
import { LoginData, AuthResponse, ErrorResponse, UserResponse } from '@/app/lib/types';

export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse | ErrorResponse>> {
    try {
        await connectDB();

        const { email, password }: LoginData = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email y contraseña son requeridos' },
                { status: 400 }
            );
        }

        // Buscar usuario y incluir password
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.comparePassword(password))) {
            return NextResponse.json(
                { message: 'Credenciales inválidas' },
                { status: 401 }
            );
        }

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

        return NextResponse.json({
            message: 'Login exitoso',
            user: userResponse,
            token
        });

    } catch (error) {
        console.error('Error en login:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}