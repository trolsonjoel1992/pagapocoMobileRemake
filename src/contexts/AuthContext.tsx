import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type User = {
  email: string
  token: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Failed to load user', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email y contraseña son requeridos')
    }

    // Validación básica de email
    if (!email.includes('@')) {
      throw new Error('Ingrese un email válido')
    }

    // Validación básica de contraseña
    if (password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres')
    }

    const mockUser = {
      email,
      token: `mock_token_${Date.now()}`,
    }

    await AsyncStorage.setItem('user', JSON.stringify(mockUser))
    setUser(mockUser)
  }

  const register = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email y contraseña son requeridos')
    }

    if (!email.includes('@')) {
      throw new Error('Ingrese un email válido')
    }

    if (password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres')
    }

    const newUser = {
      email,
      token: `mock_token_${Date.now()}`,
    }

    await AsyncStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
