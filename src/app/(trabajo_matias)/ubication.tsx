import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import React, { useState } from 'react'
import {
    FlatList,
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

export default function Ubicacion() {
  // estado para activar o desactivar la ubicacion actual
  const [ubicacionActual, setUbicacionActual] = useState(false)

  // estado para mostrar u ocultar la lista de ciudades recientes
  const [mostrarRecientes, setMostrarRecientes] = useState(false)

  // estado para mostrar u ocultar la lista de ciudades cercanas
  const [mostrarCerca, setMostrarCerca] = useState(false)

  // lista fija de ciudades visitadas recientemente
  const ciudadesRecientes = [
    'Saenz Peña',
    'Gral. San Martin',
    'Charata',
    'Las Breñas',
    'Pampa del Infierno',
    'Castelli',
  ]

  // lista de ciudades cercanas
  const ciudadesCerca = ['Vilelas', 'Fontana', 'Barranqueras']

  return (
    <ContainerView>
      {/* encabezado con titulo y boton de retroceso (sin funcionalidad por ahora) */}
      <HeaderMainComponent titulo="Ubicación" onBackPress={() => {}} />

      <View style={styles.body}>
        {/* seccion para activar ubicacion actual mediante el switch */}
        <View style={styles.ubicacionActualContainer}>
          <Image
            source={require('@/src/assets/images/ubication/MapPinLine.png')}
            style={styles.ubicacionIcon}
          />
          <Text style={styles.ubicacionText}>Ubicación actual</Text>
          <Switch
            value={ubicacionActual}
            onValueChange={setUbicacionActual}
            trackColor={{ true: '#A230C7', false: '#ccc' }}
            thumbColor={ubicacionActual ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* ciudades recientes */}
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => setMostrarRecientes(!mostrarRecientes)}
        >
          <TextInput
            placeholder="Buscar ciudad"
            placeholderTextColor="#333"
            style={styles.searchInput}
            editable={false}
          />
          <Image
            source={require('@/src/assets/images/searchBar/searchiconglass.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        {/* lista de ciudades recientes */}
        {mostrarRecientes && (
          <View style={styles.cardList}>
            <FlatList
              data={ciudadesRecientes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.ciudadItem}>
                  <Image
                    source={require('@/src/assets/images/ubication/ClockCounterClockwise.png')}
                    style={styles.iconItem}
                  />
                  <Text style={styles.ciudadNombre}>{item}</Text>
                </View>
              )}
            />
          </View>
        )}

        {/* boton que despliega lista de ciudades cercanas */}
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => setMostrarCerca(!mostrarCerca)}
        >
          <Text style={styles.textBotonToggle}>Ciudades cerca tuyo</Text>
          <Image
            source={require('@/src/assets/images/ubication/GpsFix.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        {/* lista de ciudades cercanas */}
        {mostrarCerca && (
          <View style={styles.cardList}>
            {ciudadesCerca.map((ciudad, index) => (
              <View key={index} style={styles.ciudadItem}>
                <Text style={styles.ciudadNombre}>↳ {ciudad}</Text>
              </View>
            ))}
          </View>
        )}

        {/* boton principal para confirmar la seleccion */}
        <View style={styles.botonContainer}>
          <Button variant="contained" onPress={() => {}}>
            Confirmar
          </Button>
        </View>
      </View>
    </ContainerView>
  )
}

// estilos personalizados para cada seccion del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingHorizontal: moderateScale(16),
    paddingTop: verticalScale(20),
  },
  ubicacionActualContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  ubicacionIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  ubicacionText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  searchContainer: {
    backgroundColor: '#f1e9f7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#A230C7',
  },
  textBotonToggle: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  cardList: {
    backgroundColor: '#f1e9f7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  ciudadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  iconItem: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: '#A230C7',
  },
  ciudadNombre: {
    fontSize: 15,
    color: '#000',
  },
  botonContainer: {
    marginTop: verticalScale(30),
  },
})
