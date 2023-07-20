import { TouchableOpacity, Alert } from 'react-native'
import { Modal } from '../../../../components/Modal'
import { Text } from '../../../../components/Text'
import { PencilSimple, Trash } from 'phosphor-react-native'
import { ViewFlex } from '../../../../components/ViewFlex'

import firestore from '@react-native-firebase/firestore'

interface TransactionsDetailsModalProps {
  isOpen: boolean
  id?: string
  onClose: () => void
  onEditTransaction?: () => void
}

export function TransactionsDetailsModal({
  isOpen,
  id,
  onClose,
  onEditTransaction,
}: TransactionsDetailsModalProps) {
  console.log('Console do modal', isOpen)
  function handleRemoveTransaction() {
    firestore()
      .collection('transactions')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Transação deletada com sucesso')
        onClose()
      })
      .catch((error) => console.log(error))
  }
  return (
    <Modal isOpen={isOpen} title="Detalhes da transação" onClose={onClose}>
      <ViewFlex
        w="90%"
        flexDirection="row"
        items="center"
        justify="space-between"
      >
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={handleRemoveTransaction}
        >
          <Trash size={24} color="#e52e4d" weight="bold" />
          <Text color="darkGray">Remover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={onEditTransaction}
        >
          <PencilSimple size={24} color="#323238" weight="bold" />
          <Text color="darkGray">Editar</Text>
        </TouchableOpacity>
      </ViewFlex>
    </Modal>
  )
}
