import AsyncStorage from '@react-native-async-storage/async-storage'
import { Publication, PublicationDetails, VehicleCategory } from './types'

const PUBLICATIONS_KEY = 'publications'

// Helper para obtener todas las publicaciones
const getAllPublications = async (): Promise<Publication[]> => {
  try {
    const data = await AsyncStorage.getItem(PUBLICATIONS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error al obtener publicaciones:', error)
    return []
  }
}

// ==================== CRUD PARA DETALLES ====================

// CREATE/UPDATE - Actualizar detalles de una publicación
export const updatePublicationDetails = async (
  publicationId: number,
  details: PublicationDetails
): Promise<{ success: boolean; publication?: Publication; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const pubIndex = publications.findIndex((p) => p.id === publicationId)

    if (pubIndex === -1) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    // Validar que los detalles coincidan con la categoría
    const category = publications[pubIndex].category
    if (!validateDetailsForCategory(details, category)) {
      return {
        success: false,
        error: 'Estructura de detalles inválida para la categoría',
      }
    }

    // Actualizar solo los detalles
    const updatedPublication: Publication = {
      ...publications[pubIndex],
      details: { ...details },
    }

    const updatedPublications = [...publications]
    updatedPublications[pubIndex] = updatedPublication

    await AsyncStorage.setItem(
      PUBLICATIONS_KEY,
      JSON.stringify(updatedPublications)
    )

    return { success: true, publication: updatedPublication }
  } catch (error) {
    console.error('Error al actualizar detalles:', error)
    return { success: false, error: 'Error al actualizar detalles' }
  }
}

// READ - Obtener detalles por publicación
export const getPublicationDetails = async (
  publicationId: number
): Promise<PublicationDetails | undefined> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === publicationId)
    return publication?.details
  } catch (error) {
    console.error('Error al obtener detalles:', error)
    return undefined
  }
}

// DELETE - Resetear detalles
export const resetPublicationDetails = async (
  publicationId: number
): Promise<{ success: boolean; error?: string }> => {
  try {
    const publications = await getAllPublications()
    const publication = publications.find((p) => p.id === publicationId)

    if (!publication) {
      return { success: false, error: 'Publicación no encontrada' }
    }

    const defaultDetails = getDefaultDetailsForCategory(publication.category)
    return await updatePublicationDetails(publicationId, defaultDetails)
  } catch (error) {
    console.error('Error al resetear detalles:', error)
    return { success: false, error: 'Error al resetear detalles' }
  }
}

// ==================== HELPERS ====================

// Validador de estructura por categoría
const validateDetailsForCategory = (
  details: PublicationDetails,
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

  const fieldsToCheck = requiredFields[category]
  return fieldsToCheck.every((field: string) => field in details)
}

// Generador de detalles vacíos por categoría
const getDefaultDetailsForCategory = (
  category: VehicleCategory
): PublicationDetails => {
  switch (category) {
    case 'car':
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
