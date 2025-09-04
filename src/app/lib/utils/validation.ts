import { RegisterData } from "../types";

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
    return password.length >= 6;
}

export function validateRegisterData(data: RegisterData): { isValid: boolean; message?: string } {
    const { nombre, email, password } = data;

    if (!nombre || !email || !password) {
        return { isValid: false, message: 'Todos los campos son requeridos' };
    }

    if (!validateEmail(email)) {
        return { isValid: false, message: 'Email no válido' };
    }

    if (!validatePassword(password)) {
        return { isValid: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }

    return { isValid: true };
}