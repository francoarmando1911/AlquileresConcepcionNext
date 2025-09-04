import { Types } from 'mongoose';

export interface User {
    _id?: string;
    nombre: string;
    email: string;
    password: string;
    telefono?: string;
    role: 'user' | 'admin';
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserResponse {
    _id: Types.ObjectId;
    nombre: string;
    email: string;
    telefono?: string;
    role: 'user' | 'admin';
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    nombre: string;
    email: string;
    password: string;
    telefono?: string;
}

export interface AuthResponse {
    message: string;
    user: UserResponse;
    token: string;
}

export interface ErrorResponse {
    message: string;
}

export interface JwtPayload {
    id: string;
    iat?: number;
    exp?: number;
}