import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  email: string;
  profileImage?: string;
  username?: string;
  phone?: string;
  password?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  updateProfileImage: (imageUri: string) => Promise<void>;
  getProfileImage: () => string | undefined;
  deleteProfileImage: () => Promise<void>;
  updateUserData: (data: Partial<User>) => Promise<void>;
  getUserData: () => User | null;
  updateUsername: (username: string) => Promise<void>;
  updatePhone: (phone: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
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
  updateUserData: async () => {},
  getUserData: () => null,
  updateUsername: async () => {},
  updatePhone: async () => {},
  updateEmail: async () => {},
  updatePassword: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) setUser(JSON.parse(userData));
      setLoading(false);
    };
    loadUser();
  }, []);

  const updateUserData = async (data: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...data };
    setUser(updatedUser);

    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((u: any) =>
        u.email === user.email ? { ...u, ...data } : u
      );
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const getUserData = () => {
    return user;
  };

  const login = async (email: string, password: string) => {
    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );
      if (foundUser) {
        const userData = {
          email: foundUser.email,
          username: foundUser.username,
          phone: foundUser.phone,
          profileImage: foundUser.profileImage,
        };
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
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

    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

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

    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

    const usersString = await AsyncStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((u: any) =>
        u.email === user.email ? { ...u, profileImage: undefined } : u
      );
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const updateUsername = async (username: string) => {
    if (!user) return;
    await updateUserData({ username });
  };

  const updatePhone = async (phone: string) => {
    if (!user) return;
    await updateUserData({ phone });
  };

  const updateEmail = async (email: string) => {
    if (!user) return;
    await updateUserData({ email });
  };

  const updatePassword = async (password: string) => {
    if (!user) return;
    await updateUserData({ password });
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
        updateUserData,
        getUserData,
        updateUsername,
        updatePhone,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
