import { MaterialIcons } from '@expo/vector-icons'; // íconos de material design
import * as Haptics from 'expo-haptics'; // librería para retroalimentación háptica
import React, { useRef } from 'react'; // importación de react y hook useRef
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'; // componentes de interfaz de usuario de react native

type Props = {
  title: string // título del plan
  icon: any // ícono a mostrar
  iconColor: string // color del ícono
  features: string[] // lista de características del plan
  validFeatures: number // cantidad de características válidas
  price: string // precio del plan
  selected?: boolean // indica si el plan está seleccionado
  onPress?: () => void // función a ejecutar al presionar
}

export default function PlanCard({
  title,
  icon,
  iconColor,
  features,
  validFeatures,
  price,
  selected = false,
  onPress,
}: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current // animación de escala para efecto de presión

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start() // reduce ligeramente el tamaño al presionar
  }

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start() // vuelve al tamaño original al soltar
  }

  const handleSelect = () => {
    Haptics.selectionAsync() // activa retroalimentación
    onPress?.() // ejecuta la función onPress 
  }

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleSelect}
    >
      <Animated.View
        style={[styles.card, selected && styles.selectedCard, { transform: [{ scale: scaleAnim }] }]}
      >
        <View style={styles.header}>
          <MaterialIcons
            name={selected ? 'check-circle' : icon}
            size={24}
            color={selected ? '#fff' : iconColor}
          />
          <Text
            style={[styles.planTitle, selected && styles.selectedPlanTitle]}
          >
            {title}
          </Text>
        </View>
        <View style={styles.features}>
          {features.map((item, index) => {
            const isValid = index < validFeatures // determina si la característica es válida
            return (
              <Text
                key={index}
                style={[
                  styles.feature,
                  !isValid && styles.crossed,
                  selected && styles.selectedFeature,
                ]}
              >
                <MaterialIcons
                  name={isValid ? 'check-circle' : 'cancel'}
                  size={16}
                  color={isValid ? 'green' : 'red'}
                />{' '}
                {item}
              </Text>
            )
          })}
        </View>
        <Text style={[styles.price, selected && styles.selectedPrice]}>
          {price}
        </Text>
        <Text
          style={[styles.footerText, selected && styles.selectedFooterText]}
        >
          cargo por publicación
        </Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    backgroundColor: '#f9f4fc',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCard: {
    backgroundColor: '#A230C7',
    borderColor: '#7b229d',
    shadowColor: '#A230C7',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  selectedPlanTitle: {
    color: '#fff',
  },
  features: {
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  selectedFeature: {
    color: '#f0e6fa',
  },
  crossed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 6,
    color: '#000',
  },
  selectedPrice: {
    color: '#fff',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: '#555',
  },
  selectedFooterText: {
    color: '#e0d7f6',
  },
})


