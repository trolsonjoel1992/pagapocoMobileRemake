import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#A230C7",
        tabBarInactiveTintColor: "light",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Publicaciones",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Vender",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sell" color={color} size={size} />
          ),
        }}
        /* listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Aquí puedes verificar si el usuario está logueado
            const isLoggedIn = false; // Reemplaza con tu lógica de autenticación

            if (!isLoggedIn) {
              // Previene la navegación por defecto
              e.preventDefault();
              // Redirige al login
              navigation.navigate("/(auth)");
            }
          },
        })} */
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
        /* listeners={({ navigation }) => ({
          tabPress: (e) => {
            
            //Solo con esta linea me lleva a la pagina de perfil y
            //si se hace otro click al login
            
            //router.push("/(auth)/login");

            // para la implementacion del modal no haria falta el linteners

          },
        })} */
      />
      <Tabs.Screen 
        name="(publications)/publication1"
        options={{ 
          tabBarButton: () => null,  // Oculta el tab
          //tabBarStyle: { display: "none" } 
        }}
      />
      <Tabs.Screen 
        name="(publications)/publicationDetails"
        options={{ 
          tabBarButton: () => null,  // Oculta el tab
          //tabBarStyle: { display: "none" } 
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
