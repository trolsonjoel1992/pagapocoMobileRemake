import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import {
  MotorcycleData,
  motorcycleSchema,
} from '@/src/validations/motorcycleSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const EditFormMotorcycle = () => {
  const form = useForm<MotorcycleData>({
    resolver: yupResolver(motorcycleSchema),
  })

  const { handleSubmit } = form

  const onSubmit = (data: MotorcycleData) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <FormProvider {...form}>
      <ContainerView>
        <HeaderMainComponent
          titulo="Editar datos"
          onBackPress={() => router.push('/(tabs)/sell')}
        />

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.contentBody}
        >
          <ControlledInput<MotorcycleData>
            name="brand"
            label="Marca:"
            placeholder="Ingrese la marca"
            nextInputName="model"
          />
          <ControlledInput<MotorcycleData>
            name="model"
            label="Modelo:"
            placeholder="Ingrese el modelo"
            nextInputName="year"
          />
          <ControlledInput<MotorcycleData>
            name="year"
            label="Año:"
            placeholder="Ingrese el año"
            keyboardType="numeric"
            nextInputName="color"
          />
          <ControlledInput<MotorcycleData>
            name="color"
            label="Color:"
            placeholder="Ingrese el color"
            nextInputName="motorcycleType"
          />
          <ControlledInput<MotorcycleData>
            name="motorcycleType"
            label="Tipo de moto:"
            placeholder="Ingrese el tipo de moto"
            nextInputName="fuelType"
          />
          <ControlledInput<MotorcycleData>
            name="fuelType"
            label="Tipo de combustible:"
            placeholder="Ingrese el tipo de combustible"
            nextInputName="wheelSize"
          />
          <ControlledInput<MotorcycleData>
            name="wheelSize"
            label="Rodado:"
            placeholder="Ingrese el rodado"
            nextInputName="transmision"
          />
          <ControlledInput<MotorcycleData>
            name="transmision"
            label="Transmisión:"
            placeholder="Ingrese la transmisión"
            nextInputName="engine"
          />
          <ControlledInput<MotorcycleData>
            name="engine"
            label="Cilindrada:"
            placeholder="Ingrese la cilindrada"
            nextInputName="kilometer"
          />
          <ControlledInput<MotorcycleData>
            name="kilometer"
            label="Kilómetros:"
            placeholder="Ingrese los kilómetros"
            keyboardType="numeric"
            nextInputName="description"
          />
          <ControlledInput<MotorcycleData>
            name="description"
            label="Descripción:"
            placeholder="Ingrese una descripción"
          />

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
      </ContainerView>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
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

export default EditFormMotorcycle
