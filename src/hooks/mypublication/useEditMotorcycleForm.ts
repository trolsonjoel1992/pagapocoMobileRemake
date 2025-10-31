import { usePublication } from '@/src/context/PublicationContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export const useEditMotorcycleForm = () => {
  const { publication, updatePublicationById } = usePublication();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [engineDisplacement, setEngineDisplacement] = useState('');
  const [transmission, setTransmission] = useState('');
  const [motorcycleType, setMotorcycleType] = useState('');
  const [motorcycleWheel, setMotorcycleWheel] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [description, setDescription] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar datos de la publicación
  useEffect(() => {
    if (publication) {
      setBrand(publication.brand || '');
      setModel(publication.model || '');
      setYear(publication.year || '');
      setColor(publication.color || '');
      setEngineDisplacement(publication.engineDisplacement || '');
      setTransmission(publication.transmission || '');
      setMotorcycleType(publication.motorcycleType || '');
      setMotorcycleWheel(publication.motorcycleWheel || '');
      setKilometers(publication.kilometers || '');
      setFuelType(publication.fuelType || '');
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
        engineDisplacement !== (publication.engineDisplacement || '') ||
        transmission !== (publication.transmission || '') ||
        motorcycleType !== (publication.motorcycleType || '') ||
        motorcycleWheel !== (publication.motorcycleWheel || '') ||
        kilometers !== (publication.kilometers || '') ||
        fuelType !== (publication.fuelType || '') ||
        description !== (publication.description || '');
      setHasChanges(changed);
    }
  }, [
    brand,
    model,
    year,
    color,
    engineDisplacement,
    transmission,
    motorcycleType,
    motorcycleWheel,
    kilometers,
    fuelType,
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
        engineDisplacement,
        transmission,
        motorcycleType,
        motorcycleWheel,
        kilometers,
        fuelType,
        description,
      });
      router.back();
    } catch (error) {
      console.error('Error updating motorcycle data:', error);
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
    engineDisplacement,
    setEngineDisplacement,
    transmission,
    setTransmission,
    motorcycleType,
    setMotorcycleType,
    motorcycleWheel,
    setMotorcycleWheel,
    kilometers,
    setKilometers,
    fuelType,
    setFuelType,
    description,
    setDescription,
    hasChanges,
    handleSave,
  };
};
