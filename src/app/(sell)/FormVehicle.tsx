import { styles } from '@/src/app/(sell)/FormVehicle.styles'
import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { useCreatePublication } from '@/src/features/hooks/publications.hooks'
import { VehicleData, vehicleSchema } from '@/src/validations/vehicleSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const FormVehicle = () => {
  const form = useForm<VehicleData>({
    resolver: yupResolver(vehicleSchema),
    defaultValues: {
      brand: '',
      model: '',
      year: undefined,
      version: '',
      color: '',
      fuelType: '',
      doors: undefined,
      transmision: '',
      engine: undefined,
      kilometer: undefined,
      description: '',
    },
  })

  const { handleSubmit } = form

  const { create, loading } = useCreatePublication()

  const onSubmit = async (data: VehicleData) => {
    console.log('Datos del formulario:', data)

    const ok = await create(data)

    if (ok) {
      router.replace('/(tabs)/home')
    }
  }

  return (
    <FormProvider {...form}>
      <ContainerView>
        <HeaderMainComponent
          titulo="Vender"
          onBackPress={() => router.push('/(tabs)/sell')}
        />

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.contentBody}
        >
          <ControlledInput<VehicleData>
            name="brand"
            label="Marca:"
            placeholder="Ingrese la marca"
            nextInputName="model"
          />
          <ControlledInput<VehicleData>
            name="model"
            label="Modelo:"
            placeholder="Ingrese el modelo"
            nextInputName="year"
          />
          <ControlledInput<VehicleData>
            name="year"
            label="Año:"
            placeholder="Ingrese el año"
            keyboardType="numeric"
            nextInputName="version"
          />
          <ControlledInput<VehicleData>
            name="version"
            label="Versión:"
            placeholder="Ingrese la versión"
            nextInputName="color"
          />
          <ControlledInput<VehicleData>
            name="color"
            label="Color:"
            placeholder="Ingrese el color"
            nextInputName="fuelType"
          />
          <ControlledInput<VehicleData>
            name="fuelType"
            label="Tipo de combustible:"
            placeholder="Ingrese el tipo de combustible"
            nextInputName="doors"
          />
          <ControlledInput<VehicleData>
            name="doors"
            label="Puertas:"
            placeholder="Ingrese el número de puertas"
            keyboardType="numeric"
            nextInputName="transmision"
          />
          <ControlledInput<VehicleData>
            name="transmision"
            label="Transmisión:"
            placeholder="Ingrese la transmisión"
            nextInputName="engine"
          />
          <ControlledInput<VehicleData>
            name="engine"
            label="Cilindrada:"
            placeholder="Ingrese la cilindrada"
            nextInputName="kilometer"
          />
          <ControlledInput<VehicleData>
            name="kilometer"
            label="Kilómetros:"
            placeholder="Ingrese los kilómetros"
            keyboardType="numeric"
            nextInputName="description"
          />
          <ControlledInput<VehicleData>
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
              disabled={loading}
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

export default FormVehicle
