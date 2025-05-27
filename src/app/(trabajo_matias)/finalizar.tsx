import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FinalizarPublicacion() {
  const router = useRouter();
  const [aceptaTerminos, setAceptaTerminos] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vender</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.title}>¡Ya casi terminamos!</Text>

      <View style={styles.iconBox}>
        <FontAwesome name="tag" size={80} color="#A230C7" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="attach-money" size={24} color="#333" style={styles.inputIcon} />
          <TextInput
            placeholder="Ingresá el precio"
            placeholderTextColor="#555"
            style={styles.input}
          />
          <MaterialIcons name="edit" size={20} color="#333" />
        </View>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="location-pin" size={24} color="#333" style={styles.inputIcon} />
          <TextInput
            placeholder="Ingresá tu ciudad"
            placeholderTextColor="#555"
            style={styles.input}
          />
          <MaterialIcons name="edit" size={20} color="#333" />
        </View>
      </View>

      <View style={styles.terminosContainer}>
        <TouchableOpacity onPress={() => setAceptaTerminos(!aceptaTerminos)}>
          <MaterialIcons
            name={aceptaTerminos ? "check-box" : "check-box-outline-blank"}
            size={20}
            color="#A230C7"
          />
        </TouchableOpacity>
        <Text style={styles.terminosText}>
          Acepto los <Text style={styles.link}>Términos y condiciones</Text> y autorizo el uso de
          mis datos de acuerdo a la <Text style={styles.link}>Declaración de privacidad</Text>.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (aceptaTerminos) {
            router.push("/(trabajo_matias)/modal_publicadoexitoso");
          } else {
            Alert.alert("Atención", "Debes aceptar los términos y condiciones para continuar.");
          }
        }}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  headerBar: {
    backgroundColor: '#A230C7',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  iconBox: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    gap: 15,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f4fc',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 48,
    borderColor: '#999',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  terminosText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#A230C7',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

