import Button from '@/src/components/atoms/Button'; // botón personalizado
import ControlledInput from '@/src/components/atoms/ControlledInput'; // input controlado con validación
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'; // encabezado reutilizable
import TextAreaWithIcon from '@/src/components/atoms/TextAreaWithIcon'; // área de texto con ícono

import { useRouter } from 'expo-router'; // hook para navegación
import React from 'react'; // importación de react
import { FormProvider, useForm } from 'react-hook-form'; // herramientas para formularios
import { ScrollView, StyleSheet, Text, View } from 'react-native'; // componentes de interfaz de usuario
import { SafeAreaView } from 'react-native-safe-area-context'; // vista segura para evitar solapamiento con el sistema

// definición de los campos del formulario
type FormFields = {
  nombre: string
  apellido: string
  email: string
  telefono: string
  consulta: string
}

export default function ContactaConElVendedor() {
  const router = useRouter() // inicializa el hook de navegación
  const methods = useForm<FormFields>({ mode: 'onTouched' }) // inicializa el formulario con validación al tocar

  const onSubmit = (data: FormFields) => {
    console.log('Datos del formulario:', data) // muestra los datos en consola
    router.push('/(trabajo_matias)/plan_de_venta') // navega a la siguiente pantalla
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent
        titulo="Hacé tu consulta"
        onBackPress={() => router.back()} // vuelve a la pantalla anterior
      />

      <FormProvider {...methods}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Completá tus datos de contacto</Text>

            <ControlledInput name="nombre" label="Nombre" />
            <ControlledInput name="apellido" label="Apellido" />
            <ControlledInput name="email" label="E-mail" keyboardType="email-address" />
            <ControlledInput name="telefono" label="Teléfono" keyboardType="phone-pad" />

            <TextAreaWithIcon name="consulta" label="Consulta" />

            <View style={styles.buttonContainer}>
              <Button
                variant="contained"
                onPress={() => {
                  methods.handleSubmit(onSubmit)() // ejecuta el submit del formulario
                  router.push('/(trabajo_matias)/plan_de_venta') // navegación directa
                }}
              >
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
