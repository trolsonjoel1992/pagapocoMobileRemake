import { usePublication } from '@/src/context/PublicationContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export const useEditVehicleForm = () => {
  const { publication, updatePublicationById } = usePublication();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [version, setVersion] = useState('');
  const [color, setColor] = useState('');
  const [doors, setDoors] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engineDisplacement, setEngineDisplacement] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [description, setDescription] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar datos de la publicación
  useEffect(() => {
    if (publication) {
      setBrand(publication.brand || '');
      setModel(publication.model || '');
      setYear(publication.year || '');
      setVersion(publication.version || '');
      setColor(publication.color || '');
      setDoors(publication.doors || '');
      setFuelType(publication.fuelType || '');
      setTransmission(publication.transmission || '');
      setEngineDisplacement(publication.engineDisplacement || '');
      setKilometers(publication.kilometers || '');
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
        version !== (publication.version || '') ||
        color !== (publication.color || '') ||
        doors !== (publication.doors || '') ||
        fuelType !== (publication.fuelType || '') ||
        transmission !== (publication.transmission || '') ||
        engineDisplacement !== (publication.engineDisplacement || '') ||
        kilometers !== (publication.kilometers || '') ||
        description !== (publication.description || '');
      setHasChanges(changed);
    }
  }, [
    brand,
    model,
    year,
    version,
    color,
    doors,
    fuelType,
    transmission,
    engineDisplacement,
    kilometers,
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
        version,
        color,
        doors,
        fuelType,
        transmission,
        engineDisplacement,
        kilometers,
        description,
      });
      router.back();
    } catch (error) {
      console.error('Error updating vehicle data:', error);
    }
  };

  return {
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    version,
    setVersion,
    color,
    setColor,
    doors,
    setDoors,
    fuelType,
    setFuelType,
    transmission,
    setTransmission,
    engineDisplacement,
    setEngineDisplacement,
    kilometers,
    setKilometers,
    description,
    setDescription,
    hasChanges,
    handleSave,
  };
};
