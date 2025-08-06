import CategoryIcon from '@/src/components/atom/home/categoryIcon';
import React from 'react';
import { View } from 'react-native';

const categories = [
  { name: 'Camiones', icon: 'truck' },
  { name: 'Camionetas', icon: 'pickup' },
  { name: 'Autos', icon: 'car' },
  { name: 'Motos', icon: 'motorcycle' },
  { name: 'Piezas', icon: 'piece' },
];

type CategoryProps = {
  hiddenIndex?: number | null;
  setHiddenIndex?: (idx: number | null) => void;
};

const Category = ({ hiddenIndex, setHiddenIndex }: CategoryProps) => {
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
            icon={cat.icon as any}
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
