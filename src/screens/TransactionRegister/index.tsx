import { useState } from 'react'
import { View, TouchableOpacity, Alert, ScrollView } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { Text } from '../../components/Text'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ViewFlex } from '../../components/ViewFlex'
import { useAuth } from '../../hooks/useAuth'
import { Container } from './styles'
import { removeMaskCurrency } from '../../utils/masks'
import { CalendarModal } from '../../components/CalendarModal'
import { Calendar } from 'phosphor-react-native'
import { useCalendarModal } from '../../contexts/CalendarModal-context'

export function TransactionRegister() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [typeTransaction, setTypeTransaction] = useState('expense')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenCalendarModal, setIsOpenCalendarModal] = useState(false)
  const { user } = useAuth()
  const { selectedDate } = useCalendarModal()

  function handleCloseCalendarModal() {
    setIsOpenCalendarModal(false)
  }

  function handleAddNewExpense() {
    setIsLoading(true)
    firestore()
      .collection('transactions')
      .add({
        user_id: user?.uid,
        type_transaction: typeTransaction,
        description,
        value: removeMaskCurrency(value),
        created_at: new Date(selectedDate),
      })
      .then(() => {
        Alert.alert('Transação cadastrada com sucesso')
        setDescription('')
        setValue('')
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text fontSize="md">Cadastro de transações</Text>

          <View style={{ marginTop: 42, width: '100%' }}>
            <Input
              id="description"
              label="Descrição"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={{ marginTop: 28, width: '100%' }}>
            <Input
              id="value"
              label="Valor"
              mask="currency"
              value={value}
              inputMaskChange={(text: string) => setValue(text)}
            />
          </View>

          <ViewFlex
            flexDirection="row"
            mt={32}
            items="center"
            justify="center"
            w="100%"
            gap={32}
          >
            <TouchableOpacity
              onPress={() => setTypeTransaction('expense')}
              style={{
                width: '45%',
                height: 45,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  typeTransaction === 'expense' ? '#e52e4d' : '#323238',
              }}
            >
              <Text>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTypeTransaction('revenue')}
              style={{
                width: '45%',
                height: 45,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  typeTransaction === 'revenue' ? '#00875F' : '#323238',
              }}
            >
              <Text>Receita</Text>
            </TouchableOpacity>
          </ViewFlex>
          <ViewFlex mt={42} w="100%" items="center">
            <TouchableOpacity
              onPress={() => setIsOpenCalendarModal(true)}
              style={{
                width: '45%',
                height: 45,
                backgroundColor: '#7C7C8A',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 4,
              }}
            >
              <Calendar size={28} color="#ecf2f7" />
              <Text>Selecionar data</Text>
            </TouchableOpacity>
          </ViewFlex>
          <View style={{ width: '100%', marginBottom: 42, marginTop: 42 }}>
            <Button
              title="Cadastrar"
              size="lg"
              isDisabled={description === '' || value === ''}
              onPress={handleAddNewExpense}
              isLoading={isLoading}
            />
          </View>
        </View>
      </ScrollView>
      <CalendarModal
        title="Selecione a data da transação"
        isOpen={isOpenCalendarModal}
        onClose={handleCloseCalendarModal}
      />
    </Container>
  )
}
