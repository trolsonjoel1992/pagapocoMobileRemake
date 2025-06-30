import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '@/src/constants/colors';

const PrivacyScreen = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      {/* Header */}
      <HeaderMainComponent 
        titulo="Opciones de privacidad"
        />
      {/* Cambiar nombre de usuario */}
      <Text style={styles.label}>Cambiar nombre de usuario</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nuevo usuario"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
        />
        <Icon name="edit" size={20} color="#555" />
      </View>

      {/* Cambiar contraseña */}
      <Text style={styles.label}>Cambiar contraseña</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="edit" size={20} color="#555" />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Repetir contraseña"
          placeholderTextColor="#666"
          secureTextEntry
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />
        <Icon name="edit" size={20} color="#555" />
      </View>

      {/* Cambiar correo electrónico */}
      <Text style={styles.label}>Cambiar correo electrónico</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nuevo correo"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="edit" size={20} color="#555" />
      </View>

      {/* Cambiar teléfono */}
      <Text style={styles.label}>Cambiar teléfono</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nuevo telefono"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <Icon name="edit" size={20} color="#555" />
      </View>

      {/* Botón guardar */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => alert('Cambios guardados')}
      >
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: -20,
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    paddingHorizontal: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1e7f7',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
