import { Input } from '@/src/components/atoms/ControlledInput'
import { VehicleData } from '@/src/validations/vehicleSchema'
import { StyleSheet } from 'react-native'

export const inputs: Input<VehicleData>[] = [
  {
    key: 'brand',
    label: 'Marca:',
    placeholder: 'Ingrese la marca',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'model',
    label: 'Modelo:',
    placeholder: 'Ingrese el modelo',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'year',
    label: 'Año:',
    placeholder: 'Ingrese el año',
    keyboardType: 'numeric',
    returnKeyType: 'next',
  },
  {
    key: 'version',
    label: 'Versión:',
    placeholder: 'Ingrese la versión',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'color',
    label: 'Color:',
    placeholder: 'Ingrese el color',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'fuelType',
    label: 'Tipo de combustible:',
    placeholder: 'Ingrese el tipo de combustible',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'doors',
    label: 'Puertas:',
    placeholder: 'Ingrese el número de puertas',
    keyboardType: 'numeric',
    returnKeyType: 'next',
  },
  {
    key: 'transmision',
    label: 'Transmisión:',
    placeholder: 'Ingrese la transmisión',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'engine',
    label: 'Cilindrada:',
    placeholder: 'Ingrese la cilindrada',
    keyboardType: 'default',
    returnKeyType: 'next',
  },
  {
    key: 'kilometer',
    label: 'Kilómetros:',
    placeholder: 'Ingrese los kilómetros',
    keyboardType: 'numeric',
    returnKeyType: 'next',
  },
  {
    key: 'description',
    label: 'Descripción:',
    placeholder: 'Ingrese una descripción',
    keyboardType: 'default',
    returnKeyType: 'done',
  },
]

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
  },
  contentBody: {
    flexGrow: 1,
    padding: 20,
  },
})
