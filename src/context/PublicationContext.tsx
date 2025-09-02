import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Publication = {
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
  publication: Publication | null;
  setPublication: (pub: Publication | null) => void;
  updatePublication: (fields: Partial<Publication>) => void;
  clearPublication: () => void;
  publications: Publication[];
  addPublication: (pub: Publication) => void;
  clearPublications: () => void;
};

const PublicationContext = createContext<PublicationContextType>({
  publication: null,
  setPublication: () => {},
  updatePublication: () => {},
  clearPublication: () => {},
  publications: [],
  addPublication: () => {},
  clearPublications: () => {},
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

  return (
    <PublicationContext.Provider
      value={{
        publication,
        setPublication,
        updatePublication,
        clearPublication,
        publications,
        addPublication,
        clearPublications,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export const usePublication = () => useContext(PublicationContext);
