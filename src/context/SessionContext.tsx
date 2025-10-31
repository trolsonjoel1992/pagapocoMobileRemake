import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type SessionContextType = {
  sessionId: string | null;
  loading: boolean;
};

const SessionContext = createContext<SessionContextType>({
  sessionId: null,
  loading: true,
});

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Generar UUID v4 simple (sin dependencias externas)
  const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  useEffect(() => {
    const initializeSession = async () => {
      try {
        // Intentar cargar sessionId existente
        let existingSessionId = await AsyncStorage.getItem('sessionId');

        if (!existingSessionId) {
          // Si no existe, generar uno nuevo
          existingSessionId = generateUUID();
          await AsyncStorage.setItem('sessionId', existingSessionId);
          console.log('New session created:', existingSessionId);
        } else {
          console.log('Existing session loaded:', existingSessionId);
        }

        setSessionId(existingSessionId);
      } catch (error) {
        console.error('Error initializing session:', error);
        // En caso de error, generar sessionId temporal
        setSessionId(generateUUID());
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, []);

  return (
    <SessionContext.Provider value={{ sessionId, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
