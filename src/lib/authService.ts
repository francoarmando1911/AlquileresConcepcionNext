const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

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
    user: {
        _id: string;
        nombre: string;
        email: string;
        telefono?: string;
        role: string;
    };
    token: string;
}

export const authService = {
    async login(credentials: LoginData): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error en login');
        }

        return response.json();
    },

    async register(userData: RegisterData): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error en registro');
        }

        return response.json();
    },

    async getCurrentUser(token: string) {
        const response = await fetch(`${API_URL}/auth/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Error obteniendo usuario');
        }

        return response.json();
    },

    async logout() {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Error en logout');
        }

        return response.json();
    },
};