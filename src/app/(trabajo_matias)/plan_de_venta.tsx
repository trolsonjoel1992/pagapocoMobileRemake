import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'; // componente de encabezado principal
import PlanCard from '@/src/components/atoms/PlanCard'; // componente reutilizable para mostrar planes
import { useRouter } from 'expo-router'; // hook para navegación
import React, { useState } from 'react'; // importación de react y hook de estado
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'; // componentes de interfaz de usuario de react native

export default function PlanDeVentas() {
  const router = useRouter() // inicializa el hook de navegación
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null) // estado para guardar el plan seleccionado

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan) // actualiza el estado con el plan elegido
  }

  const handleContinue = () => {
    if (selectedPlan) {
      router.push('/(trabajo_matias)/modal_terminosycondiciones') // navega a la siguiente pantalla si hay un plan seleccionado
    } else {
      Alert.alert(
        'Atención',
        'Por favor, seleccioná un plan antes de continuar.',
        [{ text: 'OK' }],
        { cancelable: false }
      ) // muestra una alerta si no se seleccionó ningún plan
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.back()} // vuelve a la pantalla anterior
      />

      <Text style={styles.title}>Elegí un plan de venta</Text>

      {/* plan premium */}
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
        onPress={() => handleSelectPlan('Premium')}
      />

      {/* plan freemium */}
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
        onPress={() => handleSelectPlan('Freemium')}
      />

      {/* botón para continuar */}
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

