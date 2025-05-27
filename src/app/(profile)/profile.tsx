import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}

      <HeaderMainComponent 
        titulo="Caracteristicas de la publicación"
        />

      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mi Perfil</Text>
      </View> */}

      {/* Información del usuario */}
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <Icon name="person-circle-outline" size={50} color="#888" />
        </View>
        <View>
          <Text style={styles.username}>Un usuario</Text>
          <Text style={styles.email}>example@gmail.com</Text>
        </View>
      </View>

      {/* Opciones */}
      <TouchableOpacity style={styles.option} onPress={() => router.push("/(profile)/information")}>
        <Icon name="information-circle" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Información de la cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/(profile)/config")}>
        <Icon name="settings-outline" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Configuración</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/(profile)/privacy")}>
        <Icon name="lock-closed-outline" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Privacidad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/(profile)/photo")}>
        <Icon name="camera-outline" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Foto de perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/(profile)/delete")}>
        <Icon name="trash-outline" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Eliminar cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} /*onPress={() => router.push("/(main)/index")}*/>
        <Icon name="power-outline" size={24} color="#9C27B0" style={styles.optionIcon} />
        <Text style={styles.optionLabel}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9C27B0',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1edf7',
    margin: 20,
    padding: 15,
    borderRadius: 12,
  },
  avatar: {
    marginRight: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    color: '#666',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 25,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
  },
});

export default ProfileScreen;
