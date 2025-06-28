import AsyncStorage from '@react-native-async-storage/async-storage'

// ==================== TIPOS ====================
type VehicleCategory = 'car' | 'truck' | 'motorcycle' | 'part'

interface BaseDetails {
  brand: string
  model: string
  color: string | null
}

interface CarTruckDetails extends BaseDetails {
  year: number
  transmission: 'manual' | 'automatic'
  fuelType: 'gasoline' | 'diesel' | 'electric'
  engineDisplacement: number
  kilometers: number
  version: string
  doors: number
}

interface MotorcycleDetails extends BaseDetails {
  year: number
  transmission: 'manual' | 'automatic'
  fuelType: 'gasoline' | 'electric'
  engineDisplacement: number
  kilometers: number
  motorcycleType: 'sport' | 'cruiser' | 'off-road'
  wheelSize: number
}

interface PartDetails extends BaseDetails {
  condition: 'new' | 'used' | 'reconditioned'
  compatibility: string
}

type PublicationDetails = CarTruckDetails | MotorcycleDetails | PartDetails

interface Publication {
  id: number
  title: string
  precio: number
  description: string
  category: VehicleCategory
  isPremium: boolean
  isSold: boolean
  isPaused: boolean
  user_id: number
  details: PublicationDetails
}

type User = {
  id: number
  email: string
  password: string
}

// ==================== CONSTANTES ====================
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

const validateDetailsForCategory = (
  details: any,
  category: VehicleCategory
): boolean => {
  const requiredFields: Record<VehicleCategory, string[]> = {
    car: [
      'brand',
      'model',
      'color',
      'year',
      'transmission',
      'fuelType',
      'engineDisplacement',
      'kilometers',
      'version',
      'doors',
    ],
    truck: [
      'brand',
      'model',
      'color',
      'year',
      'transmission',
      'fuelType',
      'engineDisplacement',
      'kilometers',
      'version',
      'doors',
    ],
    motorcycle: [
      'brand',
      'model',
      'color',
      'year',
      'transmission',
      'fuelType',
      'engineDisplacement',
      'kilometers',
      'motorcycleType',
      'wheelSize',
    ],
    part: ['brand', 'model', 'color', 'condition', 'compatibility'],
  }
  return requiredFields[category].every((field: string) => field in details)
}

const getDefaultDetailsForCategory = (
  category: VehicleCategory
): PublicationDetails => {
  switch (category) {
    case 'car':
    case 'truck':
      return {
        brand: '',
        model: '',
        color: null,
        year: 0,
        transmission: 'manual',
        fuelType: 'gasoline',
        engineDisplacement: 0,
        kilometers: 0,
        version: '',
        doors: 0,
      }
    case 'motorcycle':
      return {
        brand: '',
        model: '',
        color: null,
        year: 0,
        transmission: 'manual',
        fuelType: 'gasoline',
        engineDisplacement: 0,
        kilometers: 0,
        motorcycleType: 'sport',
        wheelSize: 0,
      }
    case 'part':
      return {
        brand: '',
        model: '',
        color: null,
        condition: 'new',
        compatibility: '',
      }
    default:
      throw new Error('Categoría inválida')
  }
}

// ==================== CRUD COMPLETO ====================

// CREATE (Con validación de usuario y detalles)
export const createPublication = async (
  publicationData: Omit<Publication, 'id'> & { details: PublicationDetails }
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    if (!(await validateUserExists(publicationData.user_id))) {
      return { success: false, error: 'El usuario no existe' }
    }

    if (
      !validateDetailsForCategory(
        publicationData.details,
        publicationData.category
      )
    ) {
      return { success: false, error: 'Detalles no válidos para la categoría' }
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
      details: publicationData.details,
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

// UPDATE (Con validación de usuario y detalles)
export const updatePublication = async (
  id: number,
  updateData: Partial<Omit<Publication, 'id'>> & {
    details?: Partial<PublicationDetails>
  }
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    let publications = await getAllPublications()
    const index = publications.findIndex((p) => p.id === id)

    if (index === -1) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (updateData.user_id && !(await validateUserExists(updateData.user_id))) {
      return { success: false, error: 'El nuevo usuario no existe' }
    }

    // Actualización parcial de detalles
    let updatedDetails = publications[index].details
    if (updateData.details) {
      updatedDetails = { ...updatedDetails, ...updateData.details }

      if (
        !validateDetailsForCategory(
          updatedDetails,
          publications[index].category
        )
      ) {
        return {
          success: false,
          error: 'Detalles no válidos para la categoría',
        }
      }
    }

    const updatedPublication = {
      ...publications[index],
      ...updateData,
      id,
      details: updatedDetails,
    }

    publications[index] = updatedPublication
    await AsyncStorage.setItem(PUBLICATIONS_KEY, JSON.stringify(publications))

    return { success: true, publication: updatedPublication }
  } catch (error) {
    console.error('Error al actualizar publicación:', error)
    return { success: false, error: 'Error al actualizar publicación' }
  }
}

// DELETE (Mantiene la misma implementación)
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

    if (publications[publicationIndex].user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para borrar esta publicación',
      }
    }

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

// Eliminar publicaciones de un usuario
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

// Marcar como vendido
export const markAsSold = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para marcar esta publicación como vendida',
      }
    }

    if (publication.isSold) {
      return {
        success: false,
        error: 'La publicación ya está marcada como vendida',
      }
    }

    return await updatePublication(id, {
      isSold: true,
      isPaused: true,
    })
  } catch (error) {
    console.error('Error al marcar como vendido:', error)
    return { success: false, error: 'Error al marcar como vendido' }
  }
}

// Desmarcar como vendido
export const unmarkAsSold = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

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

    return await updatePublication(id, {
      isSold: false,
      isPaused: false,
    })
  } catch (error) {
    console.error('Error al desmarcar como vendido:', error)
    return { success: false, error: 'Error al procesar' }
  }
}

// Pausar/Reactivar publicación
export const togglePausePublication = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para modificar esta publicación',
      }
    }

    return await updatePublication(id, {
      isPaused: !publication.isPaused,
    })
  } catch (error) {
    console.error('Error al pausar publicación:', error)
    return { success: false, error: 'Error al pausar publicación' }
  }
}

// Reactivar publicación
export const reactivatePublication = async (
  id: number,
  userId: number
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === id)

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

    return await updatePublication(id, {
      isPaused: false,
    })
  } catch (error) {
    console.error('Error al reactivar publicación:', error)
    return { success: false, error: 'Error al procesar' }
  }
}

// ==================== MÉTODOS PARA DETALLES ====================

// Obtener detalles de publicación
export const getPublicationDetails = async (
  id: number
): Promise<PublicationDetails | undefined> => {
  const publication = await getPublicationById(id)
  return publication?.details
}

// Actualizar solo los detalles
// Reemplaza esta función:
export const updatePublicationDetails = async (
  id: number,
  userId: number,
  details: Partial<PublicationDetails>
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publication = await getPublicationById(id)
    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    if (publication.user_id !== userId) {
      return {
        success: false,
        error: 'No tienes permiso para editar esta publicación',
      }
    }

    // Solución: Usar type assertion para el tipo específico
    const updatedDetails = {
      ...publication.details,
      ...details,
    } as PublicationDetails

    if (!validateDetailsForCategory(updatedDetails, publication.category)) {
      return { success: false, error: 'Detalles no válidos para la categoría' }
    }

    return await updatePublication(id, {
      details: updatedDetails, // Pasar el objeto completo, no el parcial
    })
  } catch (error) {
    console.error('Error al actualizar detalles:', error)
    return { success: false, error: 'Error al actualizar detalles' }
  }
}
