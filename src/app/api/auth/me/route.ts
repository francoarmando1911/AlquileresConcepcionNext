import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/database';
import User from '@/app/lib/Models/User';
import { verifyToken } from '@/app/lib/utils/auth';
import { UserResponse, ErrorResponse } from '@/app/lib/types';

export async function GET(request: NextRequest): Promise<NextResponse<{ user: UserResponse } | ErrorResponse>> {
    try {
        await connectDB();

        const authHeader = request.headers.get('authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json(
                { message: 'Token no proporcionado' },
                { status: 401 }
            );
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = verifyToken(token);
            const user = await User.findById(decoded.id).select('-password');

            if (!user) {
                return NextResponse.json(
                    { message: 'Usuario no encontrado' },
                    { status: 404 }
                );
            }

            const userResponse: UserResponse = {
                _id: user._id,
                nombre: user.nombre,
                email: user.email,
                telefono: user.telefono,
                role: user.role
            };

            return NextResponse.json({ user: userResponse });

        } catch {
            return NextResponse.json(
                { message: 'Token inválido' },
                { status: 401 }
            );
        }

    } catch (error) {
        console.error('Error en me endpoint:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}