import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

type TabItem = {
  id: string
  icon: ImageSourcePropType
}

type CustomTabsProps = {
  tabs: TabItem[]
  activeTab: string
  onTabPress: (id: string) => void
  isAuthenticated: boolean // Nueva prop para controlar la autenticación
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  activeTab,
  onTabPress,
  isAuthenticated,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress(tab.id)}
          activeOpacity={1}
        >
          <Image
            source={tab.icon}
            style={[
              styles.icon,
              !isAuthenticated &&
                activeTab === tab.id &&
                styles.unauthenticatedIcon,
            ]}
          />

          {/* Overlay condicional */}
          {(isAuthenticated || activeTab !== tab.id) && (
            <View
              style={[
                styles.overlay,
                activeTab === tab.id && styles.activeOverlay,
              ]}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#A230C7',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  unauthenticatedIcon: {
    opacity: 1, // Icono completamente visible cuando no autenticado
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  activeOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Opacidad más fuerte para el tab activo
  },
})

export default CustomTabs
