import React, { useState } from 'react'
import { View, Modal, StyleSheet, Pressable } from 'react-native'
import { Calendar, DateData } from 'react-native-calendars'
import { X } from 'phosphor-react-native'
import { Text } from '../Text'
import { Button } from '../Button'
import { useCalendarModal } from '../../contexts/CalendarModal-context'

interface CalendarModalProps {
  isOpen?: boolean
  title?: string
  onClose: () => void
}

export function CalendarModal({ isOpen, title, onClose }: CalendarModalProps) {
  const { setSelectedDate } = useCalendarModal()
  const [selected, setSelected] = useState('')

  function handleDateSelect(date: DateData) {
    setSelected(date.dateString)
    setSelectedDate(date.dateString)
  }

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal visible={isOpen} onRequestClose={onClose} transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  width: '90%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}
              >
                <Text color="darkGray">{title}</Text>
                <Pressable onPress={onClose}>
                  <X size={16} />
                </Pressable>
              </View>
              <View
                style={{
                  width: '90%',
                  marginBottom: 12,
                }}
              >
                <Calendar
                  onDayPress={(date: DateData) => handleDateSelect(date)}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                    },
                  }}
                />
              </View>
              <View
                style={{
                  width: '90%',
                  marginBottom: 32,
                }}
              >
                <Button size="md" title="Aplicar" onPress={onClose} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
