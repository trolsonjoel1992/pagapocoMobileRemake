import CategoryMaxButton from '@/src/components/atom/buttons/sell/categoryMaxButton';
import CategoryRegButton from '@/src/components/atom/buttons/sell/categoryRegButton';
import ImagesPath from '@/src/constants/imagesPath';
import { useAuth } from '@/src/context/AuthContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { View } from 'react-native';

type SelectButtonsProps = {
  onSelectCategory: (category: string) => void;
};

const SelectButtons = ({ onSelectCategory }: SelectButtonsProps) => {
  const { colors, theme } = useTheme();

  const categories: {
    iconSource: keyof typeof ImagesPath;
    label: string;
  }[] = [
    { iconSource: theme === 'dark' ? 'carD' : 'car', label: 'Autos' },
    { iconSource: theme === 'dark' ? 'pickupD' : 'pickup', label: 'Pickups' },
    { iconSource: theme === 'dark' ? 'truckD' : 'truck', label: 'Camiones' },
    { iconSource: theme === 'dark' ? 'piecesD' : 'pieces', label: 'Piezas' },
    {
      iconSource: theme === 'dark' ? 'motorcycleD' : 'motorcycle',
      label: 'Motos',
    },
  ];

  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const shuffledCategories = useMemo(() => shuffleArray(categories), [theme]);
  const regCategories = shuffledCategories.slice(0, 4);
  const maxCategory = shuffledCategories[4];

  const { updatePublication } = usePublication();
  const { user } = useAuth();

  const handleCategorySelect = (category: string) => {
    const id = Date.now().toString();
    updatePublication({ id, userEmail: user?.email ?? '', category });
    router.push('/(sell)/sellForm');
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {regCategories.map(cat => (
          <View
            key={cat.iconSource}
            style={{
              width: '50%',
              alignItems: 'center',
              marginVertical: 8,
            }}
          >
            <CategoryRegButton
              iconSource={cat.iconSource}
              label={cat.label}
              onPress={() => onSelectCategory(cat.iconSource.replace('D', ''))}
            />
          </View>
        ))}
      </View>
      <View style={{ alignItems: 'center', marginTop: 12 }}>
        <CategoryMaxButton
          iconSource={maxCategory.iconSource}
          label={maxCategory.label}
          onPress={() =>
            handleCategorySelect(maxCategory.iconSource.replace('D', ''))
          }
        />
      </View>
    </View>
  );
};

export default SelectButtons;
