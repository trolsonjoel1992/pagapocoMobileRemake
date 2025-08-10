import CategoryIcon from '@/src/components/atom/buttons/home/categoryButton';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';

const categories = [
  { name: 'Camiones', icon: 'truck', iconDark: 'darkTruck' },
  { name: 'Camionetas', icon: 'pickup', iconDark: 'darkPickup' },
  { name: 'Autos', icon: 'car', iconDark: 'darkCar' },
  { name: 'Motos', icon: 'motorcycle', iconDark: 'darkMotorcycle' },
  { name: 'Piezas', icon: 'piece', iconDark: 'darkPiece' },
];

type CategoryProps = {
  hiddenIndex?: number | null;
  setHiddenIndex?: (idx: number | null) => void;
};

const Category = ({ hiddenIndex, setHiddenIndex }: CategoryProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      }}
    >
      {categories.map((cat, idx) =>
        hiddenIndex === idx ? null : (
          <CategoryIcon
            key={cat.name}
            name={cat.name}
            icon={theme === 'dark' ? cat.iconDark : (cat.icon as any)}
            enableRoute={true}
            onPress={setHiddenIndex ? () => setHiddenIndex(idx) : undefined}
            index={idx}
          />
        )
      )}
    </View>
  );
};

export default Category;
