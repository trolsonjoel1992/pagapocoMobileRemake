import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import { truckSchema } from '@/src/validations/truckSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type FormData = {
  brand: string
  model: string
  year: number
  version: string
  color: string
  fuelType: string
}

const FormTruck = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(truckSchema),
  })

  const brandRef = useRef<TextInput>(null)
  const modelRef = useRef<TextInput>(null)
  const yearRef = useRef<TextInput>(null)
  const versionRef = useRef<TextInput>(null)
  const colorRef = useRef<TextInput>(null)
  const fuelTypeRef = useRef<TextInput>(null)

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.push('/(tabs)/sell')}
      />

      <ScrollView style={styles.body}>
        <Controller
          control={control}
          name="brand"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Marca'} style={styles.inputGroup}>
              <Text style={styles.label}>Marca:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={brandRef}
                  placeholder="Ingrese la marca"
                  placeholderTextColor="#999"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => modelRef.current?.focus()}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['brand'] && (
                <Text style={styles.error}>{errors['brand']?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="model"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Modelo'} style={styles.inputGroup}>
              <Text style={styles.label}>Modelo:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={modelRef}
                  placeholder="Ingrese el modelo"
                  placeholderTextColor="#999"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => yearRef.current?.focus()}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['model'] && (
                <Text style={styles.error}>{errors['model']?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="year"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Año'} style={styles.inputGroup}>
              <Text style={styles.label}>Año:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={yearRef}
                  placeholder="Ingrese el año"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value ? String(value) : ''}
                  returnKeyType="next"
                  onSubmitEditing={() => versionRef.current?.focus()}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['year'] && (
                <Text style={styles.error}>{errors['year']?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="version"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Versión'} style={styles.inputGroup}>
              <Text style={styles.label}>Versión:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={versionRef}
                  placeholder="Ingrese la versión"
                  placeholderTextColor="#999"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => colorRef.current?.focus()}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['version'] && (
                <Text style={styles.error}>{errors['version']?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="color"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Color'} style={styles.inputGroup}>
              <Text style={styles.label}>Color:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={colorRef}
                  placeholder="Ingrese el color"
                  placeholderTextColor="#999"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => fuelTypeRef.current?.focus()}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['color'] && (
                <Text style={styles.error}>{errors['color']?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="fuelType"
          render={({ field: { onChange, onBlur, value } }) => (
            <View key={'Tipo de combustible'} style={styles.inputGroup}>
              <Text style={styles.label}>Tipo de combustible:</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={fuelTypeRef}
                  placeholder="Ingrese el tipo de combustible"
                  placeholderTextColor="#999"
                  keyboardType="default"
                  style={styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                <Image source={ImagesPath.iconNotePencil} />
              </View>
              {errors['fuelType'] && (
                <Text style={styles.error}>{errors['fuelType']?.message}</Text>
              )}
            </View>
          )}
        />

        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormTruck

const styles = StyleSheet.create({
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
