import { Input } from '@/src/types/formVehicle'
import { StyleSheet } from 'react-native'

export const inputs: Input[] = [
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
    padding: 20,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0EAF5',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
  },
  error: { color: 'red', fontSize: 12, paddingLeft: 4 },
  button: {
    marginTop: 24,
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
})
