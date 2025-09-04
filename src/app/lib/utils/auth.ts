import jwt from 'jsonwebtoken';
import { JwtPayload } from '@/app/lib/types';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

const jwtSecret: jwt.Secret = JWT_SECRET;

export function generateToken(id: string): string {
    return jwt.sign(
        { id },
        jwtSecret,
        {
            expiresIn: JWT_EXPIRE as jwt.SignOptions['expiresIn'],
        }
    );
}

export function verifyToken(token: string): JwtPayload {
    try {
        return jwt.verify(token, jwtSecret) as JwtPayload;
    } catch {
        throw new Error('Token inválido');
    }
}