import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type LocationContextType = {
  shareLocation: boolean;
  setShareLocation: (value: boolean) => void;
  locationName: string | null;
  setLocationName: (name: string | null) => void;
};

const LocationContext = createContext<LocationContextType>({
  shareLocation: false,
  setShareLocation: () => {},
  locationName: null,
  setLocationName: () => {},
});

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shareLocation, setShareLocationState] = useState(false);
  const [locationName, setLocationNameState] = useState<string | null>(null);

  useEffect(() => {
    // Cargar preferencia y nombre de ciudad al iniciar
    AsyncStorage.getItem('share_location').then(value => {
      if (value !== null) setShareLocationState(value === 'true');
    });
    AsyncStorage.getItem('location_name').then(value => {
      if (value !== null) setLocationNameState(value);
    });
  }, []);

  const setShareLocation = (value: boolean) => {
    setShareLocationState(value);
    AsyncStorage.setItem('share_location', value ? 'true' : 'false');
  };

  const setLocationName = (name: string | null) => {
    setLocationNameState(name);
    if (name) {
      AsyncStorage.setItem('location_name', name);
    } else {
      AsyncStorage.removeItem('location_name');
    }
  };

  return (
    <LocationContext.Provider
      value={{
        shareLocation,
        setShareLocation,
        locationName,
        setLocationName,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
