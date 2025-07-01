import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView'
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { useCreatePublication } from '@/src/contexts/CreatePublicationContext'
import { GearData, gearSchema } from '@/src/validations/gearSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { router } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const FormGear = () => {
  const { publicationData, setPublicationData } = useCreatePublication()

  const form = useForm<GearData>({
    resolver: yupResolver(gearSchema),
    defaultValues: {
      brand: '',
      model: '',
      color: '',
      compatibility: '',
      state: '',
      description: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit } = form

  const onSubmit = (data: GearData) => {
    setPublicationData({
      ...publicationData,
      ...data,
    })
    router.push('/(sell)/salesPlan')
  }

  return (
    <FormProvider {...form}>
      <ContainerView>
        <HeaderMainComponent
          titulo="Vender"
          onBackPress={() => router.replace('/(tabs)/sell')}
        />

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.contentBody}
        >
          <ControlledInput<GearData>
            name="brand"
            label="Marca (requerido):"
            placeholder="Ingrese la marca"
            nextInputName="model"
          />
          <ControlledInput<GearData>
            name="model"
            label="Modelo (requerido):"
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

export default FormGear
