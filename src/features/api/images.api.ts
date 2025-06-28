// imageService.ts
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Image {
  id: number
  url: string
  publication_id: number | null
  user_id: number
}

const IMAGES_KEY = 'images'

// ==================== HELPERS ====================
const getAllImages = async (): Promise<Image[]> => {
  try {
    const data = await AsyncStorage.getItem(IMAGES_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error al obtener imágenes:', error)
    return []
  }
}

// ==================== CRUD OPERATIONS ====================

// CREATE - Subir nueva imagen
export const uploadImage = async (
  imageData: Omit<Image, 'id'>
): Promise<{ success: boolean; image?: Image; error?: string }> => {
  try {
    // Validar relación (publicación O usuario)
    if (imageData.publication_id === null && imageData.user_id === null) {
      return {
        success: false,
        error: 'Debe asociarse a una publicación o usuario',
      }
    }

    const images = await getAllImages()
    const newId =
      images.length > 0 ? Math.max(...images.map((img) => img.id)) + 1 : 1

    const newImage: Image = {
      ...imageData,
      id: newId,
    }

    await AsyncStorage.setItem(
      IMAGES_KEY,
      JSON.stringify([...images, newImage])
    )

    return { success: true, image: newImage }
  } catch (error) {
    console.error('Error al subir imagen:', error)
    return { success: false, error: 'Error al subir imagen' }
  }
}

// READ - Obtener imágenes por publicación
export const getImagesByPublication = async (
  publicationId: number
): Promise<Image[]> => {
  const images = await getAllImages()
  return images.filter((img) => img.publication_id === publicationId)
}

// READ - Obtener imagen de perfil
export const getUserProfileImage = async (
  userId: number
): Promise<Image | undefined> => {
  const images = await getAllImages()
  return images.find(
    (img) => img.user_id === userId && img.publication_id === null
  )
}

// UPDATE - Actualizar URL de imagen
export const updateImage = async (
  id: number,
  userId: number,
  newUrl: string
): Promise<{ success: boolean; image?: Image; error?: string }> => {
  try {
    const images = await getAllImages()
    const index = images.findIndex((img) => img.id === id)

    if (index === -1) return { success: false, error: 'Imagen no encontrada' }
    if (images[index].user_id !== userId) {
      return { success: false, error: 'No tienes permisos para editar' }
    }

    const updatedImage = { ...images[index], url: newUrl }
    images[index] = updatedImage

    await AsyncStorage.setItem(IMAGES_KEY, JSON.stringify(images))

    return { success: true, image: updatedImage }
  } catch (error) {
    console.error('Error al actualizar imagen:', error)
    return { success: false, error: 'Error al actualizar imagen' }
  }
}

// DELETE - Eliminar imagen
export const deleteImage = async (
  id: number,
  userId: number
): Promise<{ success: boolean; error?: string }> => {
  try {
    const images = await getAllImages()
    const imageToDelete = images.find((img) => img.id === id)

    if (!imageToDelete) return { success: false, error: 'Imagen no encontrada' }
    if (imageToDelete.user_id !== userId) {
      return { success: false, error: 'No tienes permisos para eliminar' }
    }

    const updatedImages = images.filter((img) => img.id !== id)
    await AsyncStorage.setItem(IMAGES_KEY, JSON.stringify(updatedImages))

    return { success: true }
  } catch (error) {
    console.error('Error al eliminar imagen:', error)
    return { success: false, error: 'Error al eliminar imagen' }
  }
}

// ==================== SPECIAL METHODS ====================

// Eliminar todas las imágenes de una publicación
export const deletePublicationImages = async (
  publicationId: number
): Promise<void> => {
  try {
    const images = await getAllImages()
    const updatedImages = images.filter(
      (img) => img.publication_id !== publicationId
    )
    await AsyncStorage.setItem(IMAGES_KEY, JSON.stringify(updatedImages))
  } catch (error) {
    console.error('Error al eliminar imágenes de publicación:', error)
    throw error
  }
}

// Actualizar/reemplazar imagen de perfil
export const updateProfileImage = async (
  userId: number,
  newUrl: string
): Promise<{ success: boolean; image?: Image; error?: string }> => {
  try {
    // Eliminar imagen anterior si existe
    const existingImage = await getUserProfileImage(userId)
    if (existingImage) {
      await deleteImage(existingImage.id, userId)
    }

    // Crear nueva imagen
    return await uploadImage({
      url: newUrl,
      user_id: userId,
      publication_id: null,
    })
  } catch (error) {
    console.error('Error al actualizar imagen de perfil:', error)
    return { success: false, error: 'Error al actualizar imagen de perfil' }
  }
}
