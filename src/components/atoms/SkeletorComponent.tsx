// skeletor v1
import React from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { moderateScale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');
const ITEM_MARGIN = moderateScale(8);
const ITEM_WIDTH = (width - moderateScale(32) - ITEM_MARGIN) / 2; // Ancho para 2 columnas con margen

const SkeletorComponent = () => {
  const shimmerAnimation = new Animated.Value(0);

  // Animación de shimmer
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const shimmerStyle = {
    transform: [
      {
        translateX: shimmerAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 200],
        }),
      },
    ],
  };

  // Generar items
  const renderSkeletonItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <View 
          key={i} 
          style={[
            styles.itemContainer,
            { 
              marginRight: i % 2 === 0 ? ITEM_MARGIN : 0,
              marginBottom: verticalScale(16)
            }
          ]}
        >
          {/* Imagen del producto */}
          <View style={styles.imagePlaceholder}>
            <Animated.View style={[styles.shimmer, shimmerStyle]} />
          </View>
          
          {/* Texto del producto */}
          <View style={styles.textPlaceholder}>
            <Animated.View style={[styles.shimmer, shimmerStyle]} />
          </View>
          
          {/* Precio */}
          <View style={styles.pricePlaceholder}>
            <Animated.View style={[styles.shimmer, shimmerStyle]} />
          </View>
        </View>
      );
    }
    return items;
  };

  return (
    <View style={styles.container}>
      {/* Header - Barra de búsqueda */}
      <View style={styles.header}>
        <View style={styles.searchPlaceholder}>
          <Animated.View style={[styles.shimmer, shimmerStyle]} />
        </View>
      </View>

      {/* Body - Grid de productos con ScrollView */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.gridContainer}
      >
        {renderSkeletonItems()}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerPlaceholder}>
          <Animated.View style={[styles.shimmer, shimmerStyle]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: moderateScale(16),
    paddingTop: moderateScale(20),
  },
  searchPlaceholder: {
    height: verticalScale(40),
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: moderateScale(8),
    paddingBottom: verticalScale(80), // Espacio para el footer
  },
  itemContainer: {
    width: ITEM_WIDTH,
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1, // Mantener relación cuadrada
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    marginBottom: verticalScale(8),
  },
  textPlaceholder: {
    width: '100%',
    height: verticalScale(16),
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
    marginBottom: verticalScale(4),
  },
  pricePlaceholder: {
    width: moderateScale(60),
    height: verticalScale(14),
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(16),
    backgroundColor: 'white',
  },
  footerPlaceholder: {
    height: verticalScale(20),
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
  },
  shimmer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default SkeletorComponent;