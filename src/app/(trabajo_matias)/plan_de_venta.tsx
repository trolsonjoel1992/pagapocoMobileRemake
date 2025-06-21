import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function PlanDeVentas() {
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      {/* <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vender</Text>
        <View style={{ width: 24 }} />
      </View> */}
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.back()} //router.push("/(tabs)/home")
      />

      <Text style={styles.title}>Elegí un plan de venta</Text>

      {/* PREMIUM */}
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="star" size={24} color="#b56fc5" />
          <Text style={styles.planTitle}>Premium</Text>
        </View>
        <View style={styles.features}>
          <Text style={styles.feature}>
            <MaterialIcons name="check-circle" size={16} color="green" />{' '}
            Exposición VIP
          </Text>
          <Text style={styles.feature}>
            <MaterialIcons name="check-circle" size={16} color="green" /> Hasta
            8 fotos
          </Text>
          <Text style={styles.feature}>
            <MaterialIcons name="check-circle" size={16} color="green" />{' '}
            Duración de 90 días
          </Text>
          <Text style={styles.feature}>
            <MaterialIcons name="check-circle" size={16} color="green" />{' '}
            Republicación automática
          </Text>
        </View>
        <Text style={styles.price}>$3.000</Text>
        <Text style={styles.footerText}>Cargo por publicación</Text>
      </View>

      {/* FREEMIUM */}
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="star-o" size={24} color="#b56fc5" />
          <Text style={styles.planTitle}>Freemium</Text>
        </View>
        <View style={styles.features}>
          <Text style={styles.feature}>
            <MaterialIcons name="error-outline" size={16} color="#e6bb00" />{' '}
            Exposición mínima
          </Text>
          <Text style={styles.feature}>
            <MaterialIcons name="error-outline" size={16} color="#e6bb00" />{' '}
            Sólo 4 fotos
          </Text>
          <Text style={styles.feature}>
            <MaterialIcons name="error-outline" size={16} color="#e6bb00" />{' '}
            Duración de 30 días
          </Text>
          <Text style={[styles.feature, styles.crossed]}>
            <MaterialIcons name="cancel" size={16} color="red" /> Republicación
            automática
          </Text>
        </View>
        <Text style={styles.price}>GRATIS</Text>
        <Text style={styles.footerText}>Cargo por publicación</Text>
      </View>

      {/* Botón de Continuar */}
      <TouchableOpacity
        style={styles.continuarButton}
        onPress={() =>
          router.push('/(trabajo_matias)/subi-las-fotos-de-tu-vehiculo')
        }
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
  },
  headerBar: {
    backgroundColor: '#A230C7',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#f9f4fc',
    borderRadius: 20,
    padding: 50,
    marginBottom: 20,
    shadowColor: '#000',
    /*  shadowOffset: { width: 1, height: 2 }, */
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  features: {
    marginBottom: 10,
  },
  feature: {
    fontSize: 14,
    marginBottom: 4,
  },
  crossed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 4,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  continuarButton: {
    width: 170,
    height: 55,
    backgroundColor: '#A230C7',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  continuarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
