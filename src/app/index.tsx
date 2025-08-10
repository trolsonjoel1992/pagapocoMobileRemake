import { router } from 'expo-router';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    router.replace('/splash');
  }, []);

  return null;
};

export default Index;
