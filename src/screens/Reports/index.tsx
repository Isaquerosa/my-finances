import { useState, useEffect, useRef } from 'react'
import { VictoryPie } from 'victory-native'
import { FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { Text } from '../../components/Text'
import { ViewFlex } from '../../components/ViewFlex'
import { MonthCard } from '../../components/MonthCard'
import { ChartContainer, Container } from './styles'
import { ExpenseProps, MONTHS_ARRAY } from '../Home'
import { useAuth } from '../../hooks/useAuth'
import { CategoryColors } from '../../utils/categoryColor'
import { ExpensesCardByCategory } from '../../components/ExpensesCardByCategory'
import { ListEmpty } from '../../components/ListEmpty'
import { useExpenses } from '../../contexts/Expenses-context'
import { Loading } from '../../components/Loading'

export function Reports() {
  const actualMonth = new Date().getMonth() + 1
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [transactionsData, setTransactionsData] = useState<ExpenseProps[]>([])
  const [monthSelected, setMonthSelected] = useState<string>(
    actualMonth.toString(),
  )
  const flatListRef = useRef<FlatList>(null)
  const { user } = useAuth()
  const { expensesByCategory, filterExpensesTransactions } = useExpenses()

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
          filterExpensesTransactions(data)
          setIsLoadingData(false)
        })
    }
    subscriber()
  }, [monthSelected])
  console.log(monthSelected)
  return (
    <Container>
      <ViewFlex
        flexDirection="column"
        w="100%"
        mb={32}
        items="center"
        justify="space-between"
      >
        <FlatList
          ref={flatListRef}
          data={MONTHS_ARRAY}
          initialScrollIndex={Number(monthSelected)}
          snapToAlignment="center"
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
        <>
          <ChartContainer>
            <VictoryPie
              data={transactionsData}
              x="description"
              y="value"
              colorScale={transactionsData.map((transaction) =>
                CategoryColors(transaction.category),
              )}
              style={{ labels: { fill: 'transparent' } }}
              width={160}
              height={160}
              innerRadius={60}
            />
          </ChartContainer>
          <ViewFlex
            flexDirection="column"
            w="100%"
            h={340}
            mt={12}
            items="center"
          >
            <Text>Despesas por categoria</Text>
            <FlatList
              data={expensesByCategory}
              keyExtractor={(item) => item.description}
              renderItem={({ item }) => (
                <ExpensesCardByCategory
                  desciption={item.description}
                  value={item.value}
                />
              )}
              ListEmptyComponent={() => (
                <ListEmpty message="Não há dados para exibir" />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[{ paddingBottom: 100 }]}
              style={{ marginTop: 8 }}
            />
          </ViewFlex>
        </>
      )}
    </Container>
  )
}
