import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  email: string;
  profileImage?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  // Nuevos métodos para manejar la foto de perfil
  updateProfileImage: (imageUri: string) => Promise<void>;
  getProfileImage: () => string | undefined;
  deleteProfileImage: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  logout: async () => {},
  deleteAccount: async () => {},
  updateProfileImage: async () => {},
  getProfileImage: () => undefined,
  deleteProfileImage: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar usuario autenticado desde AsyncStorage al iniciar la app
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) setUser(JSON.parse(userData));
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );
      if (foundUser) {
        setUser({ email: foundUser.email });
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({ email: foundUser.email })
        );
        return true;
      }
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const deleteAccount = async () => {
    if (user) {
      const usersString = await AsyncStorage.getItem('users');
      let users = [];
      if (usersString) {
        users = JSON.parse(usersString);
      }
      const filteredUsers = users.filter((u: any) => u.email !== user.email);
      await AsyncStorage.setItem('users', JSON.stringify(filteredUsers));
    }
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const updateProfileImage = async (imageUri: string) => {
    if (!user) return;

    const updatedUser = { ...user, profileImage: imageUri };
    setUser(updatedUser);

    // Actualizar en AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

    // Actualizar en la lista de usuarios
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((u: any) =>
        u.email === user.email ? { ...u, profileImage: imageUri } : u
      );
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const getProfileImage = () => {
    return user?.profileImage;
  };

  const deleteProfileImage = async () => {
    if (!user) return;

    const updatedUser = { ...user };
    delete updatedUser.profileImage;
    setUser(updatedUser);

    // Actualizar en AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

    // Actualizar en la lista de usuarios
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((u: any) =>
        u.email === user.email ? { ...u, profileImage: undefined } : u
      );
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        deleteAccount,
        updateProfileImage,
        getProfileImage,
        deleteProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
