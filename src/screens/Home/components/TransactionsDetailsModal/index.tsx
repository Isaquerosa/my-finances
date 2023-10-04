import { TouchableOpacity, Alert } from 'react-native'
import { Modal } from '../../../../components/Modal'
import { Text } from '../../../../components/Text'
import { PencilSimple, Trash } from 'phosphor-react-native'
import { ViewFlex } from '../../../../components/ViewFlex'

import firestore from '@react-native-firebase/firestore'
import { formatBrlCoin, maskDate } from '../../../../utils/masks'

interface TransactionsDetailsModalProps {
  isOpen: boolean
  id?: string
  description?: string
  type_transaction?: string
  category?: string
  date?: string
  value?: string
  onClose: () => void
  onEditTransaction?: () => void
}

export function TransactionsDetailsModal({
  isOpen,
  description,
  type_transaction,
  category,
  date,
  value,
  id,
  onClose,
  onEditTransaction,
}: TransactionsDetailsModalProps) {
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
      {/* <ViewFlex mb={12}>
        <ViewFlex flexDirection="row" gap={80} mr={12}>
          <ViewFlex mb={24}>
            <Text color="gray">{description}</Text>

            <Text color={type_transaction === 'expense' ? 'red' : 'green'}>
              {type_transaction === 'expense' ? '- ' : '+ '}
              {formatBrlCoin(value)}
            </Text>
          </ViewFlex>
          <ViewFlex mb={12}>
            <Text color="gray">Categoria</Text>
            <Text color="gray">{category}</Text>
          </ViewFlex>
        </ViewFlex>
        <ViewFlex>
          <ViewFlex mb={12}>
            <Text color="gray">Data</Text>
            <Text color="gray">{maskDate(date)}</Text>
          </ViewFlex>
        </ViewFlex>
      </ViewFlex> */}
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
          <Text color="gray">Remover</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={onEditTransaction}
        >
          <PencilSimple size={24} color="#ecf2f7" weight="bold" />
          <Text color="gray">Editar</Text>
        </TouchableOpacity> */}
      </ViewFlex>
    </Modal>
  )
}
