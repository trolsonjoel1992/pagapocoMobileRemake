import { styles } from '@/src/app/(sell)/FormGear.styles'
import Button from '@/src/components/atoms/Button'
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { GearData, gearSchema } from '@/src/validations/gearSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const FormGear = () => {
  const form = useForm<GearData>({
    resolver: yupResolver(gearSchema),
  })

  const { handleSubmit } = form

  const onSubmit = (data: GearData) => {
    console.log('Datos del formulario:', data)
  }

  return (
    <FormProvider {...form}>
      <SafeAreaView style={styles.container}>
        <HeaderMainComponent
          titulo="Vender"
          onBackPress={() => router.push('/(tabs)/sell')}
        />

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.contentBody}
        >
          <ControlledInput<GearData>
            name="brand"
            label="Marca:"
            placeholder="Ingrese la marca"
            nextInputName="model"
          />
          <ControlledInput<GearData>
            name="model"
            label="Modelo:"
            placeholder="Ingrese el modelo"
            nextInputName="color"
          />
          <ControlledInput<GearData>
            name="color"
            label="Color:"
            placeholder="Ingrese el color"
            nextInputName="state"
          />
          <ControlledInput<GearData>
            name="state"
            label="Estado:"
            placeholder="Ingrese el estado"
            nextInputName="compatibility"
          />
          <ControlledInput<GearData>
            name="compatibility"
            label="Compatible con:"
            placeholder="Ingrese la compatibilidad"
            nextInputName="description"
          />
          <ControlledInput<GearData>
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
      </SafeAreaView>
    </FormProvider>
  )
}

export default FormGear
