import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ContactarConVendedor() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contactá con el vendedor</Text>
      </View>

      <Text style={styles.subtitle}>Completá tus datos de contacto</Text>

      {['Nombre', 'Apellido', 'E-mail', 'Teléfono'].map((label, index) => (
        <View key={index} style={styles.inputGroup}>
          <Text style={styles.label}>{label}:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={`Ingresá tu ${label.toLowerCase()}`}
              placeholderTextColor="#aaa"
            />
            <Ionicons name="create-outline" size={20} color="#333" />
          </View>
        </View>
      ))}

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Consulta:</Text>
        <View style={styles.inputContainerLarge}>
          <TextInput
            style={styles.textArea}
            placeholder="Escribí tu pregunta"
            placeholderTextColor="#aaa"
            multiline
            numberOfLines={4}
          />
          <Ionicons name="create-outline" size={20} color="#333" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(trabajo_matias)/plan_de_venta")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b832e2',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: '#f1e8f8',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  inputContainerLarge: {
    backgroundColor: '#f1e8f8',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  textArea: {
    flex: 1,
    fontSize: 14,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#c78ef0',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
