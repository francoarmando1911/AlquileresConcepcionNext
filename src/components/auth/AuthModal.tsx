'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type AuthMode = 'login' | 'register';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [mode, setMode] = useState<AuthMode>('login');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute -top-10 -right-10 text-white text-2xl hover:text-gray-300"
                >
                    ×
                </button>

                {mode === 'login' ? (
                    <LoginForm
                        onSwitchToRegister={() => setMode('register')}
                        onClose={onClose}
                    />
                ) : (
                    <RegisterForm
                        onSwitchToLogin={() => setMode('login')}
                        onClose={onClose}
                    />
                )}
            </div>
        </div>
    );
}