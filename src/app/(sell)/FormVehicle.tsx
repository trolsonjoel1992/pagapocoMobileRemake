import Button from '@/src/components/atoms/Button'
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { inputs, styles } from '@/src/constants/formVehicle'
import { VehicleData, vehicleSchema } from '@/src/validations/vehicleSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const FormVehicle = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleData>({
    resolver: yupResolver(vehicleSchema),
  })

  const refs: Record<keyof VehicleData, React.RefObject<TextInput | null>> = {
    brand: useRef<TextInput>(null),
    model: useRef<TextInput>(null),
    year: useRef<TextInput>(null),
    version: useRef<TextInput>(null),
    color: useRef<TextInput>(null),
    fuelType: useRef<TextInput>(null),
    doors: useRef<TextInput>(null),
    transmision: useRef<TextInput>(null),
    engine: useRef<TextInput>(null),
    kilometer: useRef<TextInput>(null),
    description: useRef<TextInput>(null),
  }

  const inputsRef = inputs.map((input) => ({
    ...input,
    ref: refs[input.key],
  }))

  const onSubmit = (data: VehicleData) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Vender"
        onBackPress={() => router.push('/(tabs)/sell')}
      />

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.contentBody}
      >
        {inputsRef.map((item, i) => (
          <ControlledInput<VehicleData>
            key={item.key}
            name={item.key}
            label={item.label}
            placeholder={item.placeholder}
            keyboardType={item.keyboardType}
            returnKeyType={item.returnKeyType}
            control={control}
            error={errors[item.key]}
            ref={item.ref}
            onSubmitInput={() => inputsRef[i + 1]?.ref?.current?.focus()}
          />
        ))}

        <View
          style={{ flex: 1, alignSelf: 'center', width: moderateScale(170) }}
        >
          <Button
            variant="contained"
            fullWidth
            onPress={handleSubmit(onSubmit)}
          >
            Continuar
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormVehicle
