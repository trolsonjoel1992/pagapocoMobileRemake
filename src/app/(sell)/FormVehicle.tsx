import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { inputs, styles } from '@/src/constants/formVehicle'
import ImagesPath from '@/src/constants/ImagesPath'
import { FormData } from '@/src/types/formVehicle'
import { truckSchema } from '@/src/validations/truckSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const FormVehicle = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(truckSchema),
  })

  const refs: Record<keyof FormData, React.RefObject<TextInput | null>> = {
    brand: useRef<TextInput>(null),
    model: useRef<TextInput>(null),
    year: useRef<TextInput>(null),
    version: useRef<TextInput>(null),
    color: useRef<TextInput>(null),
    fuelType: useRef<TextInput>(null),
  }

  const inputsRef = inputs.map((input) => ({
    ...input,
    ref: refs[input.key],
  }))

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
        {inputsRef.map((item, i) => (
          <Controller
            key={item.key}
            control={control}
            name={item.key}
            render={({ field: { onChange, onBlur, value } }) => (
              <View key={item.key} style={styles.inputGroup}>
                <Text style={styles.label}>{item.label}</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={item.ref}
                    placeholder={item.placeholder}
                    placeholderTextColor="#999"
                    keyboardType={item.keyboardType}
                    style={styles.input}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value ? String(value) : ''}
                    returnKeyType={item.returnKeyType}
                    onSubmitEditing={() =>
                      inputsRef[i + 1]?.ref?.current?.focus()
                    }
                  />
                  <Image source={ImagesPath.iconNotePencil} />
                </View>
                {errors[item.key] && (
                  <Text style={styles.error}>{errors[item.key]?.message}</Text>
                )}
              </View>
            )}
          />
        ))}

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

export default FormVehicle
