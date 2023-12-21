import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définissez le type de votre utilisateur (vous pouvez ajouter plus de champs si nécessaire)
interface User {
  username: string;
}

// Définissez le type de votre contexte
interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    // Implémentez la logique de récupération des informations de l'utilisateur
    const userFromToken: User = { username: 'UtilisateurDeTest' };
    setUser(userFromToken);
  };

  const logout = () => {
    // Implémentez la logique de déconnexion
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};