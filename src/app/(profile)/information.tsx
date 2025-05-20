import React, { use } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';

const AccountInfoScreen = () => {
  return (
    <View style={styles.container}>

        <HeaderMainComponent 
        titulo="Caracteristicas de la publicación"
        />

      {/* Encabezado */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => {router.push("/(profile)");}}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Información de la cuenta</Text> 
      </View> */}

      {/* Información del usuario */}
      <View style={styles.userInfo}>
        <Icon name="person-circle-outline" size={50} color="#888" style={styles.avatarIcon} />
        <View>
          <Text style={styles.username}>Un usuario</Text>
          <Text style={styles.email}>example@gmail.com</Text>
        </View>
      </View>

      {/* Campos de información */}
      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput style={styles.input} value="Un Usuario" editable={false} />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput style={styles.input} value="example@gmail.com" editable={false} />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput style={styles.input} value="+112233445566" editable={false} />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => {router.push({ href: "/profile/index" })}}>
        <Text style={styles.buttonText}>Regresar al perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: -20,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatarIcon: {
    marginRight: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    color: '#666',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f1edf7',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default AccountInfoScreen;
