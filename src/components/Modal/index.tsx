import { X } from 'phosphor-react-native'
import React, { ReactNode, useState } from 'react'
import {
  Alert,
  Modal as ModalReactNative,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native'

interface ModalProps {
  isOpen: boolean
  title?: string
  children?: ReactNode
  onClose?: () => void
}

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <ModalReactNative
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 32,
              }}
            >
              <Text style={styles.modalText}>{title}</Text>
              <Pressable onPress={onClose} style={{ marginBottom: 12 }}>
                <X size={16} />
              </Pressable>
            </View>
            {children}
          </View>
        </View>
      </ModalReactNative>
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
    backgroundColor: '#323238',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#ecf2f7',
    marginLeft: 62,
  },
})
