import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
export type Publication = {
  id: string;
  isSold: boolean;
  isPaused: boolean;
  title: string;
  city: string;
  price: string;
  userEmail: string;
  isPremium: boolean;
  category: string;
  brand: string;
  model: string;
  color: string;
  year?: string;
  version?: string;
  doors?: string;
  fuelType?: string;
  transmission?: string;
  engineDisplacement?: string;
  kilometers?: string;
  motorcycleType?: string;
  motorcycleWheel?: string;
  condition?: string;
  compatibility?: string;
  description?: string;
};
type PublicationContextType = {
  publications: Publication[];
  publication: Publication | null;
  setPublication: (pub: Publication | null) => void;
  clearPublication: () => void;
  clearPublications: () => void;
  addPublication: (pub: Publication) => Promise<void>;
  deletePublicationById: (id: string) => Promise<void>;
  updatePublication: (fields: Partial<Publication>) => void;
  updatePublicationById: (
    id: string,
    fields: Partial<Publication>
  ) => Promise<void>;
};
const PublicationContext = createContext<PublicationContextType>({
  publication: null,
  setPublication: () => {},
  updatePublication: () => {},
  clearPublication: () => {},
  publications: [],
  addPublication: async () => {},
  clearPublications: () => {},
  updatePublicationById: async () => {},
  deletePublicationById: async () => {},
});
export const PublicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [publication, setPublication] = useState<Publication | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  // Cargar publicaciones al iniciar
  useEffect(() => {
    loadPublications();
  }, []);
  // Cargar publicaciones desde AsyncStorage
  const loadPublications = async () => {
    try {
      const savedPublications = await AsyncStorage.getItem('publications');
      if (savedPublications) {
        setPublications(JSON.parse(savedPublications));
      }
    } catch (error) {
      console.error('Error loading publications:', error);
    }
  };
  const updatePublication = (fields: Partial<Publication>) => {
    setPublication(prev =>
      prev ? { ...prev, ...fields } : ({ ...fields } as Publication)
    );
  };
  const clearPublication = () => setPublication(null);
  const addPublication = async (pub: Publication) => {
    try {
      const newPublications = [...publications, pub];
      await AsyncStorage.setItem(
        'publications',
        JSON.stringify(newPublications)
      );
      setPublications(newPublications);
    } catch (error) {
      console.error('Error saving publication:', error);
    }
  };
  const clearPublications = async () => {
    try {
      await AsyncStorage.removeItem('publications');
      setPublications([]);
    } catch (error) {
      console.error('Error clearing publications:', error);
    }
  };
  const updatePublicationById = async (
    id: string,
    fields: Partial<Publication>
  ) => {
    try {
      const updatedPublications = publications.map(pub =>
        pub.id === id ? { ...pub, ...fields } : pub
      );
      // Guardar en AsyncStorage
      await AsyncStorage.setItem(
        'publications',
        JSON.stringify(updatedPublications)
      );
      // Actualizar estado
      setPublications(updatedPublications);
      console.log(`Publicación ${id} actualizada:`, fields);
    } catch (error) {
      console.error('Error updating publication:', error);
    }
  };
  // Eliminar publicación
  const deletePublicationById = async (id: string) => {
    try {
      // Eliminar imágenes asociadas
      await AsyncStorage.removeItem(`images_${id}`);
      // Filtrar la publicación del array
      const updatedPublications = publications.filter(pub => pub.id !== id);
      // Guardar en AsyncStorage
      await AsyncStorage.setItem(
        'publications',
        JSON.stringify(updatedPublications)
      );
      // Actualizar estado
      setPublications(updatedPublications);
      console.log(`Publicación ${id} eliminada correctamente`);
    } catch (error) {
      console.error('Error eliminando publicación:', error);
      throw error;
    }
  };
  return (
    <PublicationContext.Provider
      value={{
        publication,
        addPublication,
        setPublication,
        clearPublication,
        updatePublication,
        updatePublicationById,
        deletePublicationById,
        publications,
        clearPublications,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
export const usePublication = () => useContext(PublicationContext);
