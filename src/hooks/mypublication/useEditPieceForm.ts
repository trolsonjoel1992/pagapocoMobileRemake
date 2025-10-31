import { usePublication } from '@/src/context/PublicationContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export const useEditPieceForm = () => {
  const { publication, updatePublicationById } = usePublication();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [condition, setCondition] = useState('');
  const [compatibility, setCompatibility] = useState('');
  const [description, setDescription] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar datos de la publicación
  useEffect(() => {
    if (publication) {
      setBrand(publication.brand || '');
      setModel(publication.model || '');
      setYear(publication.year || '');
      setColor(publication.color || '');
      setCondition(publication.condition || '');
      setCompatibility(publication.compatibility || '');
      setDescription(publication.description || '');
    }
  }, [publication]);

  // Detectar cambios
  useEffect(() => {
    if (publication) {
      const changed =
        brand !== (publication.brand || '') ||
        model !== (publication.model || '') ||
        year !== (publication.year || '') ||
        color !== (publication.color || '') ||
        condition !== (publication.condition || '') ||
        compatibility !== (publication.compatibility || '') ||
        description !== (publication.description || '');
      setHasChanges(changed);
    }
  }, [
    brand,
    model,
    year,
    color,
    condition,
    compatibility,
    description,
    publication,
  ]);

  const handleSave = async () => {
    if (!publication?.id) {
      return;
    }

    if (!hasChanges) {
      router.back();
      return;
    }

    try {
      await updatePublicationById(publication.id, {
        brand,
        model,
        year,
        color,
        condition,
        compatibility,
        description,
      });
      router.back();
    } catch (error) {
      console.error('Error updating piece data:', error);
    }
  };

  return {
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    color,
    setColor,
    condition,
    setCondition,
    compatibility,
    setCompatibility,
    description,
    setDescription,
    hasChanges,
    handleSave,
  };
};
