import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { authUtils } from '../utils/auth';
import { mockUser, mockAdminUser } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const token = authUtils.getAuthToken();
    const savedUser = authUtils.getUser();
    
    if (token && savedUser) {
      setUser(savedUser);
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock authentication logic
      if (email === 'devolper2011@gmail.com' && password === 'admin123') {
        const token = 'mock-admin-token';
        authUtils.setAuthToken(token);
        authUtils.setUser(mockAdminUser);
        setUser(mockAdminUser);
        return true;
      } else if (email === 'user@example.com' && password === 'user123') {
        const token = 'mock-user-token';
        authUtils.setAuthToken(token);
        authUtils.setUser(mockUser);
        setUser(mockUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Mock registration logic
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        isAdmin: false,
        isVerified: false, // In real app, would require email verification
        createdAt: new Date().toISOString()
      };

      const token = 'mock-user-token';
      authUtils.setAuthToken(token);
      authUtils.setUser(newUser);
      setUser(newUser);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    authUtils.removeAuthToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.isAdmin || false,
      login,
      register,
      logout,
      loading
    }}>
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