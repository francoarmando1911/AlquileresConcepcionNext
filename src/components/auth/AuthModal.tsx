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
        <div className="fixed inset-0 bg-[#F5DFC1] bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div
                className="
                    relative 
                    w-full max-w-md  
                    bg-white rounded-2xl shadow-lg 
                    p-6 sm:p-8 
                    overflow-y-auto max-h-[90vh]
                "
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-black text-2xl hover:text-gray-500"
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
