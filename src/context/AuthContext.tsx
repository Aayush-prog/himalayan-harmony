
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type UserRole = 'admin' | 'user' | null;

interface AuthContextType {
    user: { name: string; role: UserRole } | null;
    login: (role: 'admin' | 'user') => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<{ name: string; role: UserRole } | null>(null);
    const navigate = useNavigate();

    // Load user from local storage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('hk100_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (role: 'admin' | 'user') => {
        const fakeUser = {
            name: role === 'admin' ? 'Admin User' : 'John Doe',
            role: role,
        };
        setUser(fakeUser);
        localStorage.setItem('hk100_user', JSON.stringify(fakeUser));

        if (role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/dashboard');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('hk100_user');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
