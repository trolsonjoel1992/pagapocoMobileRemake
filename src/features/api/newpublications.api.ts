import AsyncStorage from '@react-native-async-storage/async-storage'

// Interfaces
interface Publication {
  id: number
  title: string
  precio: number
  description: string
  category: string
  isPremium: boolean
  isSold: boolean
  isPaused: boolean
  user_id: number
}

type User = {
  id: number
  email: string
  password: string
}

// Keys
const PUBLICATIONS_KEY = 'publications'
const USERS_KEY = 'users'

// ==================== HELPERS ====================
const getAllPublications = async (): Promise<Publication[]> => {
  try {
    const data = await AsyncStorage.getItem(PUBLICATIONS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error al obtener publicaciones:', error)
    return []
  }
}

const validateUserExists = async (userId: number): Promise<boolean> => {
  try {
    const usersData = await AsyncStorage.getItem(USERS_KEY)
    const users: User[] = usersData ? JSON.parse(usersData) : []
    return users.some((user) => user.id === userId)
  } catch (error) {
    console.error('Error validando usuario:', error)
    return false
  }
}

// ==================== CRUD COMPLETO ====================

// CREATE (Con validación de usuario)
export const createPublication = async (
  publicationData: Omit<Publication, 'id'>
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    // Validar usuario
    if (!(await validateUserExists(publicationData.user_id))) {
      return { success: false, error: 'El usuario no existe' }
    }

    const publications = await getAllPublications()
    const newId =
      publications.length > 0
        ? Math.max(...publications.map((p) => p.id)) + 1
        : 1

    const newPublication: Publication = {
      ...publicationData,
      id: newId,
      isPremium: publicationData.isPremium || false,
      isSold: publicationData.isSold || false,
      isPaused: publicationData.isPaused || false,
    }

    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify([...publications, newPublication])
    )

    return { success: true, publication: newPublication }
  } catch (error) {
    console.error('Error al crear publicación:', error)
    return { success: false, error: 'Error al crear publicación' }
  }
}

// READ (Listar todas)
export const listPublications = async (): Promise<Publication[]> => {
  return await getAllPublications()
}

// READ (Obtener por ID)
export const getPublicationById = async (
  id: number
): Promise<Publication | undefined> => {
  const publications = await getAllPublications()
  return publications.find((p) => p.id === id)
}

// READ (Obtener por usuario)
export const getPublicationsByUser = async (
  userId: number
): Promise<Publication[]> => {
  const publications = await getAllPublications()
  return publications.filter((p) => p.user_id === userId)
}

// UPDATE (Con validación de usuario)
export const updatePublication = async (
  id: number,
  updateData: Partial<Omit<Publication, 'id'>>
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    let publications = await getAllPublications()
    const index = publications.findIndex((p) => p.id === id)

    if (index === -1) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    // Validar usuario si se intenta cambiar
    if (updateData.user_id && !(await validateUserExists(updateData.user_id))) {
      return { success: false, error: 'El nuevo usuario no existe' }
    }

    const updatedPublication = {
      ...publications[index],
      ...updateData,
      id, // Aseguramos que el ID no cambie
    }

    publications[index] = updatedPublication
    await AsyncStorage.setItem(PUBLICATIONS_KEY, JSON.stringify(publications))

    return { success: true, publication: updatedPublication }
  } catch (error) {
    console.error('Error al actualizar publicación:', error)
    return { success: false, error: 'Error al actualizar publicación' }
  }
}

// ==================== DELETE CON VERIFICACIÓN DE PROPIETARIO ====================
export const deletePublication = async (
  id: number,
  userId: number
): Promise<{ success: boolean; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publicationIndex = publications.findIndex((p) => p.id === id)

    if (publicationIndex === -1) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    // Verificar que la publicación pertenezca al usuario
    if (publications[publicationIndex].user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para borrar esta publicación',
      }
    }

    // Eliminar la publicación
    const updatedPublications = publications.filter((p) => p.id !== id)
    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify(updatedPublications)
    )

    return { success: true }
  } catch (error) {
    console.error('Error al eliminar publicación:', error)
    return { success: false, error: 'Error al eliminar publicación' }
  }
}

// ==================== FUNCIONES ESPECIALES ====================

// Eliminar publicaciones de un usuario (usado al borrar usuario)
export const deleteUserPublications = async (userId: number): Promise<void> => {
  try {
    const publications = await getAllPublications()
    const updatedPublications = publications.filter((p) => p.user_id !== userId)
    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify(updatedPublications)
    )
  } catch (error) {
    console.error('Error eliminando publicaciones del usuario:', error)
    throw error
  }
}

// ==================== TOGGLE PAUSE CON VERIFICACIÓN ====================
export const markAsSold = async (
  id: number,
  userId: number // ID del usuario que intenta marcar como vendido
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    // Verificar que la publicación pertenezca al usuario
    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para marcar esta publicación como vendida',
      }
    }

    // Si ya está vendida, no hacemos cambios
    if (publication.isSold) {
      return {
        success: false,
        error: 'La publicación ya está marcada como vendida',
      }
    }

    // Actualizar estado
    return await updatePublication(id, {
      isSold: true,
      isPaused: true,
    })
  } catch (error) {
    console.error('Error al marcar como vendido:', error)
    return { success: false, error: 'Error al marcar como vendido' }
  }
}

export const unmarkAsSold = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    // Validaciones
    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (publication.user_id !== userId) {
      return { success: false, error: 'No tienes permiso para esta acción' }
    }

    if (!publication.isSold) {
      return {
        success: false,
        error: 'La publicación no está marcada como vendida',
      }
    }

    // Actualización
    const updatedPublication = {
      ...publication,
      isSold: false,
      isPaused: false, // Reactivamos al desmarcar como vendido
    }

    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify(
        publications.map((p) => (p.id === id ? updatedPublication : p))
      )
    )

    return { success: true, publication: updatedPublication }
  } catch (error) {
    console.error('Error al desmarcar como vendido:', error)
    return { success: false, error: 'Error al procesar' }
  }
}

// ==================== TOGGLE PAUSE CON VERIFICACIÓN ====================
export const togglePausePublication = async (
  id: number,
  userId: number // ID del usuario que intenta pausar
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    // Verificar propiedad
    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para modificar esta publicación',
      }
    }

    // Actualizar estado
    return await updatePublication(id, {
      isPaused: !publication.isPaused,
    })
  } catch (error) {
    console.error('Error al pausar publicación:', error)
    return { success: false, error: 'Error al pausar publicación' }
  }
}
export const reactivatePublication = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    // Validaciones
    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para reactivar esta publicación',
      }
    }

    if (!publication.isPaused) {
      return { success: false, error: 'La publicación ya está activa' }
    }

    if (publication.isSold) {
      return {
        success: false,
        error: 'No puedes reactivar una publicación vendida',
      }
    }

    // Actualización
    const updatedPublication = {
      ...publication,
      isPaused: false,
    }

    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify(
        publications.map((p) => (p.id === id ? updatedPublication : p))
      )
    )

    return { success: true, publication: updatedPublication }
  } catch (error) {
    console.error('Error al reactivar publicación:', error)
    return { success: false, error: 'Error al procesar' }
  }
}
