import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
  id: number
  email: string
  password: string
}

export const apiCreateUser = async (email: string, password: string) => {
  try {
    const response = await AsyncStorage.getItem('users')
    const users = response ? JSON.parse(response) : []

    // Verificamps si el usuario ya existe
    const userExists = users.some((user: User) => user.email === email)
    if (userExists) {
      throw new Error('El usuario ya existe')
    }

    // Creamos nuevo usuario
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      email,
      password,
    }

    users.push(newUser)
    await AsyncStorage.setItem('users', JSON.stringify(users))

    return { success: true, user: newUser }
  } catch (error) {
    console.error('Error al crear usuario:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    }
  }
}

export const apiGetUserByEmail = async (email: string) => {
  try {
    const response = await AsyncStorage.getItem('users')
    const users = response ? JSON.parse(response) : []

    const user = users.find((user: User) => user.email === email)
    return user || null
  } catch (error) {
    console.error('Error al obtener usuario:', error)
    return null
  }
}

export const apiValidateUser = async (email: string, password: string) => {
  try {
    const user = await apiGetUserByEmail(email)
    if (!user) {
      return { success: false, error: 'Usuario no encontrado' }
    }

    if (user.password !== password) {
      return { success: false, error: 'Contraseña incorrecta' }
    }

    return { success: true, user }
  } catch (error) {
    console.error('Error al validar usuario:', error)
    return { success: false, error: 'Error al validar usuario' }
  }
}

export const apiUpdateUserByEmail = async (
  email: string,
  updates: Partial<Omit<User, 'id' | 'email'>>
) => {
  try {
    const response = await AsyncStorage.getItem('users')
    const users: User[] = response ? JSON.parse(response) : []

    const userIndex = users.findIndex((user) => user.email === email)
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado')
    }

    // Actualizamos el usuario manteniendo el id y email original
    const updatedUser = {
      ...users[userIndex],
      ...updates,
    }

    users[userIndex] = updatedUser
    await AsyncStorage.setItem('users', JSON.stringify(users))

    return { success: true, user: updatedUser }
  } catch (error) {
    console.error('Error al actualizar usuario:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    }
  }
}
export const apiDeleteUserByEmail = async (email: string) => {
  try {
    const response = await AsyncStorage.getItem('users')
    const users: User[] = response ? JSON.parse(response) : []

    const userIndex = users.findIndex((user) => user.email === email)
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado')
    }

    const deletedUser = users[userIndex]
    users.splice(userIndex, 1)
    await AsyncStorage.setItem('users', JSON.stringify(users))

    return { success: true, user: deletedUser }
  } catch (error) {
    console.error('Error al eliminar usuario:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    }
  }
}
