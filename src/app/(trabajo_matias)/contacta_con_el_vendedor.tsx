// ContactaConElVendedor.tsx
import Button from '@/src/components/atoms/Button';
import ControlledInput from '@/src/components/atoms/ControlledInput';
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import TextAreaWithIcon from '@/src/components/atoms/TextAreaWithIcon'; // componente nuevo

import { useRouter } from 'expo-router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FormFields = {
  nombre: string
  apellido: string
  email: string
  telefono: string
  consulta: string
}

export default function ContactaConElVendedor() {
  const router = useRouter()
  const methods = useForm<FormFields>()

  const onSubmit = (data: FormFields) => {
    console.log('Datos del formulario:', data)
    router.push('/(trabajo_matias)/plan_de_venta')
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Hacé tu consulta"
        onBackPress={() => router.back()}
      />

      <FormProvider {...methods}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Completá tus datos de contacto</Text>

            {/* Inputs reutilizables */}
            <ControlledInput name="nombre" label="Nombre" />
            <ControlledInput name="apellido" label="Apellido" />
            <ControlledInput
              name="email"
              label="E-mail"
              keyboardType="email-address"
            />
            <ControlledInput
              name="telefono"
              label="Teléfono"
              keyboardType="phone-pad"
            />

            {/* Campo de texto largo */}
            <TextAreaWithIcon name="consulta" label="Consulta" />

            {/* Botón de continuar */}
            <View style={styles.buttonContainer}>
              <Button variant="contained" onPress={methods.handleSubmit(onSubmit)}>
                Continuar
              </Button>
            </View>
          </View>
        </ScrollView>
      </FormProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
})
