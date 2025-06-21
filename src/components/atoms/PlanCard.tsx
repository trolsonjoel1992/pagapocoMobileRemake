import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  title: string
  icon: any
  iconColor: string
  features: string[]
  validFeatures: number
  price: string
  selected?: boolean
}

export default function PlanCard({
  title,
  icon,
  iconColor,
  features,
  validFeatures,
  price,
  selected = false,
}: Props) {
  return (
    <View style={[styles.card, selected && styles.selectedCard]}>
      <View style={styles.header}>
        <MaterialIcons name={icon} size={24} color={iconColor} />
        <Text style={[styles.planTitle, selected && styles.selectedPlanTitle]}>
          {title}
        </Text>
      </View>
      <View style={styles.features}>
        {features.map((item, index) => {
          const isValid = index < validFeatures
          return (
            <Text
              key={index}
              style={[styles.feature, !isValid && styles.crossed, selected && styles.selectedFeature]}
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
      <Text style={[styles.price, selected && styles.selectedPrice]}>{price}</Text>
      <Text style={[styles.footerText, selected && styles.selectedFooterText]}>
        Cargo por publicación
      </Text>
    </View>
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

