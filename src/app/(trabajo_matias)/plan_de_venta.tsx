import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import PlanCard from '@/src/components/atoms/PlanCard'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default function PlanDeVentas() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan)
  }

  const handleContinue = () => {
    if (selectedPlan) {
      router.push('/(trabajo_matias)/subi-las-fotos-de-tu-vehiculo')
    } else {
      Alert.alert(
        'Atención',
        'Por favor, seleccioná un plan antes de continuar.',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.back()}
      />

      <Text style={styles.title}>Elegí un plan de venta</Text>

      <TouchableOpacity
        onPress={() => handleSelectPlan('Premium')}
        activeOpacity={0.7}
      >
        <PlanCard
          icon="star"
          title="Premium"
          features={[
            'Exposición VIP',
            'Hasta 8 fotos',
            'Duración de 90 días',
            'Republicación automática',
          ]}
          price="$3.000"
          iconColor="#b56fc5"
          validFeatures={4}
          selected={selectedPlan === 'Premium'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSelectPlan('Freemium')}
        activeOpacity={0.7}
      >
        <PlanCard
          icon="star-border"
          title="Freemium"
          features={[
            'Exposición mínima',
            'Sólo 4 fotos',
            'Duración de 30 días',
            'Republicación automática',
          ]}
          price="GRATIS"
          iconColor="#b56fc5"
          validFeatures={3}
          selected={selectedPlan === 'Freemium'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.continuarButton,
          !selectedPlan && styles.continuarButtonDisabled,
        ]}
        onPress={handleContinue}
        activeOpacity={selectedPlan ? 0.8 : 1}
        disabled={!selectedPlan}
      >
        <Text style={styles.continuarButtonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#000',
  },
  continuarButton: {
    width: 180,
    height: 55,
    backgroundColor: '#A230C7',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  continuarButtonDisabled: {
    backgroundColor: '#ccc',
  },
  continuarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
