import CustomCheckbox from '@/src/components/atoms/CustomCheckbox'
import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import ImagesPath from '@/src/constants/ImagesPath'
import React, { useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

// notificaciones simuladas
const initialNotifications = [
  {
    id: '1',
    title: '¡Tenés una nueva pregunta !',
    date: 'Ayer a las 00:00',
  },
  {
    id: '2',
    title: '¡Tus favoritos esperan!',
    date: 'El miércoles a las 00:00',
  },
  {
    id: '3',
    title: '¡Felicidades vendiste tu publicación!',
    date: 'El martes a las 00:00',
  },
  {
    id: '4',
    title: '¡Respondieron tu consulta!',
    date: 'El lunes a las 00:00AM',
  },
]

const Notificaciones = () => {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [checkedAll, setCheckedAll] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleAll = () => {
    const newState = !checkedAll
    const updatedChecks = notifications.reduce((acc, n) => {
      acc[n.id] = newState
      return acc
    }, {} as Record<string, boolean>)
    setCheckedAll(newState)
    setCheckedItems(updatedChecks)
  }

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const deleteNotification = (id: string) => {
    Alert.alert(
      'Eliminar notificación',
      '¿Estás seguro que querés eliminar esta notificación?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setNotifications((prev) => prev.filter((n) => n.id !== id))
            const updatedChecks = { ...checkedItems }
            delete updatedChecks[id]
            setCheckedItems(updatedChecks)
          },
        },
      ]
    )
  }

  const deleteSelected = () => {
    const idsToDelete = Object.entries(checkedItems)
      .filter(([, isChecked]) => isChecked)
      .map(([id]) => id)

    if (idsToDelete.length === 0) return

    Alert.alert(
      'Eliminar seleccionadas',
      '¿Seguro que querés eliminar las notificaciones marcadas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setNotifications((prev) =>
              prev.filter((n) => !idsToDelete.includes(n.id))
            )
            setCheckedItems({})
            setCheckedAll(false)
          },
        },
      ]
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <Image source={ImagesPath.iconEye} style={styles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteNotification(item.id)}>
          <Image source={ImagesPath.iconTrash} style={styles.iconButton} />
        </TouchableOpacity>
        <View style={styles.checkboxWithText}>
          <Text style={styles.leidoLabel}>Leído</Text>
          <CustomCheckbox
            checked={checkedItems[item.id] || false}
            onToggle={() => toggleItem(item.id)}
          />
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMainComponent titulo="Notificaciones" onBackPress={() => {}} />

      <View style={styles.body}>
        <View style={styles.marcarTodoContainer}>
          <CustomCheckbox checked={checkedAll} onToggle={toggleAll} />
          <Text style={styles.marcarTodoText}>Marcar todo como leído</Text>
        </View>

        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />

        {/* botón para eliminar seleccionadas */}
        <TouchableOpacity style={styles.deleteButton} onPress={deleteSelected}>
          <Text style={styles.deleteText}>Eliminar seleccionadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.volverButton}>
          <Text style={styles.volverText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    padding: moderateScale(16),
  },
  marcarTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  marcarTodoText: {
    marginLeft: 8,
    color: '#000',
  },
  listContainer: {
    gap: verticalScale(10),
  },
  notificationCard: {
    backgroundColor: '#EDE6F3',
    borderRadius: 20,
    padding: verticalScale(12),
  },
  notificationTextContainer: {
    marginBottom: verticalScale(10),
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: '#000',
  },
  notificationDate: {
    color: '#555',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 30,
    height: 30,
    tintColor: '#A230C7',
  },
  checkboxWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  leidoLabel: {
    color: '#000',
  },
  volverButton: {
    backgroundColor: '#A230C7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(10),
  },
  volverText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  deleteButton: {
    backgroundColor: '#FF4B4B',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
})

export default Notificaciones
