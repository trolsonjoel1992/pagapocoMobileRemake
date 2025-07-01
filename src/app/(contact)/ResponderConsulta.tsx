import Button from '@/src/components/atoms/Button'
import ContainerView from '@/src/components/atoms/ContainerView' // fondo superior lila
import ControlledInput from '@/src/components/atoms/ControlledInput'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import TextAreaWithIcon from '@/src/components/atoms/TextAreaWithIcon'

import { useRouter } from 'expo-router'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

type FormFields = {
  nombre: string
  email: string
  telefono: string
  respuesta: string
}

export default function ResponderConsulta() {
  const router = useRouter()
  const methods = useForm<FormFields>({ mode: 'onSubmit' })

  const onSubmit = (data: FormFields) => {
    router.push('/(tabs)/home')
  }

  return (
    <ContainerView>
      <HeaderMainComponent
        titulo="Contactá con el interesado"
        onBackPress={() => router.back()}
      />

      <FormProvider {...methods}>
        <View style={styles.body}>
          <Text style={styles.label}>Te contacta:</Text>
          <ControlledInput name="nombre" label="Nombre" />

          <Text style={styles.label}>Correo Electrónico:</Text>
          <ControlledInput
            name="email"
            label="E-mail"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Su teléfono:</Text>
          <ControlledInput
            name="telefono"
            label="Teléfono"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Respuesta:</Text>
          <TextAreaWithIcon name="respuesta" label="respuesta" />

          {/* botones inferiores: ver, responder, eliminar */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.circleButton}>
              <Image
                source={require('@/src/assets/images/publicationsbuton/whiteeye.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>

            <View style={styles.centerButton}>
              <Button
                variant="contained"
                onPress={methods.handleSubmit(onSubmit)}
              >
                Responder
              </Button>
            </View>

            <TouchableOpacity style={styles.circleButton}>
              <Image
                source={require('@/src/assets/images/publicationsbuton/icons/yDeleteIcon.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </FormProvider>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: verticalScale(1),
  },
  label: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    marginBottom: 2,
    marginTop: 5,
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(-10),
    paddingHorizontal: moderateScale(10),
  },
  centerButton: {
    flex: 1,
    marginHorizontal: 12,
  },
  circleButton: {
    backgroundColor: '#A230C7',
    borderRadius: 16,
    padding: 12,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
})
