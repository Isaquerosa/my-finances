import { useEffect, useState, useRef } from 'react'
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { Loading } from '../../components/Loading'
import { ListCard } from '../../components/ListCard'
import { ListEmpty } from '../../components/ListEmpty'
import { ViewFlex } from '../../components/ViewFlex'
import { MonthCard } from '../../components/MonthCard'
import { useAuth } from '../../hooks/useAuth'
import { Container } from './styles'
import { formatBrlCoin, removeMaskCurrency } from '../../utils/masks'
import { TransactionsDetailsModal } from './components/TransactionsDetailsModal'

interface ExpenseProps {
  id: string
  description: string
  type_transaction: string
  value: string
  created_at: string
}

const MONTHS_ARRAY = [
  { key: '1', label: 'Janeiro' },
  { key: '2', label: 'Fevereiro' },
  { key: '3', label: 'Março' },
  { key: '4', label: 'Abril' },
  { key: '5', label: 'Maio' },
  { key: '6', label: 'Junho' },
  { key: '7', label: 'Julho' },
  { key: '8', label: 'Agosto' },
  { key: '9', label: 'Setembro' },
  { key: '10', label: 'Outubro' },
  { key: '11', label: 'Novembro' },
  { key: '12', label: 'Dezembro' },
]

export function Home() {
  const actualMonth = new Date().getMonth() + 1
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [monthSelected, setMonthSelected] = useState<string>(
    actualMonth.toString(),
  )
  const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false)
  const [transactionsData, setTransactionsData] = useState<ExpenseProps[]>([])
  const [transactionsDetails, setTransactionsDetails] = useState<ExpenseProps>()
  console.log('Console do mês do atual', actualMonth.toString())
  const { user } = useAuth()
  const flatListRef = useRef<FlatList>(null)

  const summary = transactionsData.reduce(
    (acc, transaction) => {
      if (transaction.type_transaction === 'revenue') {
        acc.deposits += Number(removeMaskCurrency(transaction.value))
        acc.total += Number(removeMaskCurrency(transaction.value))
      } else {
        acc.withdraws += Number(removeMaskCurrency(transaction.value))
        acc.total -= Number(removeMaskCurrency(transaction.value))
      }
      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  function handleCloseDetailsModal() {
    setIsOpenDetailsModal(false)
  }

  function handleOpenDetailsModal(item: ExpenseProps) {
    setIsOpenDetailsModal(true)
    setTransactionsDetails(item)
  }

  useEffect(() => {
    setIsLoadingData(true)

    async function subscriber() {
      const monthEndNumber = Number(monthSelected)
      const monthEnd = monthEndNumber + 1

      console.log('Console do end', monthEnd)
      const start = new Date(`2023-${monthSelected}-01`)
      const end = new Date(`2023-${monthEnd}-01`)
      console.log('Console da data', start)
      console.log('Console da data', end)
      await firestore()
        .collection('transactions')
        .where('user_id', '==', user?.uid)
        .where('created_at', '>=', start)
        .where('created_at', '<', end)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          }) as ExpenseProps[]
          setTransactionsData(data)
          setIsLoadingData(false)
        })
    }
    subscriber()
  }, [monthSelected])

  return (
    <Container>
      <ViewFlex
        flexDirection="column"
        w="100%"
        mb={32}
        items="center"
        justify="space-between"
      >
        <Text style={styles.text}>Home page</Text>
        <FlatList
          ref={flatListRef}
          data={MONTHS_ARRAY}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => (
            <MonthCard
              name={item.label}
              isActive={monthSelected?.toString() === item.key}
              onPress={() => setMonthSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ViewFlex>
      {isLoadingData ? (
        <Loading />
      ) : (
        <FlatList
          data={transactionsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListCard
              desciption={item.description}
              value={item.value}
              date={item.created_at}
              typeTransaction={item.type_transaction}
              onShowDetails={() => handleOpenDetailsModal(item)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há dados para exibir" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }]}
        />
      )}

      <ViewFlex
        flexDirection="row"
        mt={24}
        items="center"
        justify="center"
        w="100%"
        gap={12}
      >
        <TouchableOpacity
          style={{
            width: '30%',
            height: 50,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00875F',
          }}
        >
          <Text style={{ color: '#fff' }}>
            {formatBrlCoin(summary.deposits.toString())}
          </Text>
          <Text style={{ color: '#fff' }}>Receitas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '30%',
            height: 50,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e52e4d',
          }}
        >
          <Text style={{ color: '#fff' }}>
            {formatBrlCoin(summary.withdraws.toString())}
          </Text>
          <Text style={{ color: '#fff' }}>Despesas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '30%',
            height: 50,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#323238',
          }}
        >
          <Text style={{ color: '#fff' }}>
            {formatBrlCoin(summary.total.toString())}
          </Text>
          <Text style={{ color: '#fff' }}>Saldo</Text>
        </TouchableOpacity>
      </ViewFlex>
      <TransactionsDetailsModal
        isOpen={isOpenDetailsModal}
        id={transactionsDetails?.id}
        onClose={handleCloseDetailsModal}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8D8D99',
    marginBottom: 18,
    padding: 12,
  },
  text: {
    color: '#fff',
    marginBottom: 18,
  },
})
