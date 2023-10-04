import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { Trash } from 'phosphor-react-native'
import { ViewFlex } from '../ViewFlex'
import { formatBrlCoin, maskDate } from '../../utils/masks'
import { CategoryColors } from '../../utils/categoryColor'

import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Tag } from '../ExpensesCardByCategory/styles'
import { Container, DeleteContainer, Name, Value } from './styles'

interface ListCardProps {
  id: string
  desciption: string
  category: string
  value: string
  date: any
  typeTransaction: string
}

export function ListCard({
  id,
  desciption,
  category,
  value,
  date,
  typeTransaction,
}: ListCardProps) {
  function handleRemoveTransaction() {
    firestore()
      .collection('transactions')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Transação deletada com sucesso')
      })
      .catch((error) => console.log(error))
  }

  function handleSwipeToRightActions() {
    return (
      <DeleteContainer onPress={handleRemoveTransaction}>
        <Trash size={24} color="#fff" />
      </DeleteContainer>
    )
  }
  return (
    <Container>
      <Swipeable
        overshootRight={false}
        renderRightActions={handleSwipeToRightActions}
        containerStyle={{
          width: '100%',
          backgroundColor: '#323238',
          borderRadius: 6,
          height: 72,
        }}
      >
        <ViewFlex flexDirection="row" w="100%">
          <Tag color={CategoryColors(category)} />
          <ViewFlex flexDirection="column" w="70%">
            <Name>{desciption}</Name>
            <Value typeTransaction={typeTransaction}>
              {typeTransaction === 'expense' ? '- ' : '+ '}
              {formatBrlCoin(value)}
            </Value>
          </ViewFlex>
          <ViewFlex mt={20} ml={-18}>
            <Name>{maskDate(date)}</Name>
          </ViewFlex>
        </ViewFlex>
      </Swipeable>
    </Container>
  )
}
