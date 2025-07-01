import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

export type User = { id: number; email: string; password: string }
export type Publication = {
  id: number
  title: string
  price: number
  city: string
  isPremium: boolean
  user_id: number
  images: string[]
}
export type Favorite = { id: number; user_id: number; publication_id: number }

type AppContextType = {
  currentUser: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string) => Promise<boolean>
  logout: () => void
  publications: Publication[]
  createPublication: (pub: Omit<Publication, 'id'>) => Promise<void>
  getUserPublications: (userId: number) => Promise<Publication[]>
  getPublicationById: (id: number) => Publication | null
  favorites: Favorite[]
  toggleFavorite: (pubId: number) => Promise<void>
  getUserFavorites: (userId: number) => Promise<Publication[]>
  isFavorite: (pubId: number) => boolean
}

const AppContext = createContext<AppContextType | null>(null)

export const useApp = () => useContext(AppContext)!

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [publications, setPublications] = useState<Publication[]>([])
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    const load = async () => {
      const pubStr = await AsyncStorage.getItem('publications')
      const favStr = await AsyncStorage.getItem('favorites')
      if (pubStr) setPublications(JSON.parse(pubStr))
      if (favStr) setFavorites(JSON.parse(favStr))
    }
    load()
  }, [])

  const login = async (email: string, password: string) => {
    const usersStr = await AsyncStorage.getItem('users')
    const users = usersStr ? JSON.parse(usersStr) : []
    const user = users.find(
      (u: User) => u.email === email && u.password === password
    )
    if (user) {
      setCurrentUser(user)
      return true
    }
    return false
  }

  const register = async (email: string, password: string) => {
    const usersStr = await AsyncStorage.getItem('users')
    const users = usersStr ? JSON.parse(usersStr) : []
    const exists = users.find((u: User) => u.email === email)
    if (exists) return false
    const newUser = { id: Date.now(), email, password }
    const updatedUsers = [...users, newUser]
    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers))
    setCurrentUser(newUser)
    return true
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const createPublication = async (pub: Omit<Publication, 'id'>) => {
    const newPub = { ...pub, id: Date.now() }
    const updated = [...publications, newPub]
    setPublications(updated)
    await AsyncStorage.setItem('publications', JSON.stringify(updated))
  }

  const getUserPublications = async (userId: number) => {
    return publications.filter((p) => p.user_id === userId)
  }

  const getPublicationById = (id: number) => {
    return publications.find((p) => p.id === id) || null
  }

  const toggleFavorite = async (pubId: number) => {
    if (!currentUser) return
    const exists = favorites.find(
      (f) => f.publication_id === pubId && f.user_id === currentUser.id
    )
    let updated
    if (exists) {
      updated = favorites.filter((f) => f.id !== exists.id)
    } else {
      const newFav = {
        id: Date.now(),
        user_id: currentUser.id,
        publication_id: pubId,
      }
      updated = [...favorites, newFav]
    }
    setFavorites(updated)
    await AsyncStorage.setItem('favorites', JSON.stringify(updated))
  }

  const getUserFavorites = async (userId: number) => {
    const favs = favorites.filter((f) => f.user_id === userId)
    return publications.filter((p) =>
      favs.some((f) => f.publication_id === p.id)
    )
  }

  const isFavorite = (pubId: number) => {
    if (!currentUser) return false
    return favorites.some(
      (f) => f.publication_id === pubId && f.user_id === currentUser.id
    )
  }

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
        publications,
        createPublication,
        getUserPublications,
        favorites,
        toggleFavorite,
        getUserFavorites,
        isFavorite,
        getPublicationById,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
