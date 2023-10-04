/* eslint-disable no-unused-expressions */
import { ReactNode, createContext, useState, useContext } from 'react'
import { ExpenseProps } from '../../screens/Home'
import { removeMaskCurrency } from '../../utils/masks'

interface ExpensesByCategoryProps {
  description: string
  value: string
}

interface ExpensesContextData {
  expensesByCategory: ExpensesByCategoryProps[]
  filterExpensesTransactions: (transactionsData: ExpenseProps[]) => void
}

interface ExpensesProviderProps {
  children: ReactNode
}

const ExpensesContext = createContext({} as ExpensesContextData)

export function ExpensesProvider({ children }: ExpensesProviderProps) {
  const [expensesByCategory, setExpensesByCategory] = useState<
    ExpensesByCategoryProps[]
  >([])

  function filterExpensesTransactions(transactionsData: ExpenseProps[]) {
    const expensesFilter = transactionsData.filter(
      (transaction) => transaction.type_transaction !== 'revenue',
    )

    const summary = expensesFilter.reduce(
      (acc, transaction) => {
        // function returnCategory(transaction: ExpenseProps) {
        //   return category[transaction.category]
        // }

        // returnCategory(transaction)
        // const category = {
        //   Casa: (acc.Casa += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Casa' ? transaction.value : '',
        //     ),
        //   )),
        //   Alimentação: (acc.Alimentação += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Alimentação' ? transaction.value : '',
        //     ),
        //   )),
        //   Saúde: (acc.Saúde += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Saúde' ? transaction.value : '',
        //     ),
        //   )),
        //   Outros: (acc.Outros += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Outros' ? transaction.value : '',
        //     ),
        //   )),
        //   Renda: (acc.Renda += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Renda' ? transaction.value : '',
        //     ),
        //   )),
        //   'Renda extra': (acc['Renda extra'] += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Renda extra' ? transaction.value : '',
        //     ),
        //   )),
        //   Educação: (acc.Educação += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Educação' ? transaction.value : '',
        //     ),
        //   )),
        //   Lazer: (acc.Lazer += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Lazer' ? transaction.value : '',
        //     ),
        //   )),
        //   Pet: (acc.Pet += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Pet' ? transaction.value : '',
        //     ),
        //   )),
        //   Transporte: (acc.Transporte += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Transporte' ? transaction.value : '',
        //     ),
        //   )),
        //   'Assinaturas e serviços': (acc['Assinaturas e serviços'] += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Assinaturas e serviços'
        //         ? transaction.value
        //         : '',
        //     ),
        //   )),
        //   Investimentos: (acc.Investimentos += Number(
        //     removeMaskCurrency(
        //       transaction.category === 'Investimentos' ? transaction.value : '',
        //     ),
        //   )),
        // }

        if (transaction.category === 'Casa') {
          acc.Casa += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Alimentação') {
          acc.Alimentação += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Saúde') {
          acc.Saúde += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Outros') {
          acc.Outros += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Renda') {
          acc.Renda += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Renda extra') {
          acc['Renda extra'] += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Educação') {
          acc.Educação += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Lazer') {
          acc.Lazer += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Pet') {
          console.log(transaction.category)
          acc.Pet += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Transporte') {
          acc.Transporte += Number(removeMaskCurrency(transaction.value))
        }
        if (transaction.category === 'Assinaturas e serviços') {
          acc['Assinaturas e serviços'] += Number(
            removeMaskCurrency(transaction.value),
          )
        }
        if (transaction.category === 'Investimentos') {
          acc.Investimentos += Number(removeMaskCurrency(transaction.value))
        }
        return acc
      },
      {
        Casa: 0,
        Alimentação: 0,
        Saúde: 0,
        Outros: 0,
        Renda: 0,
        'Renda extra': 0,
        Educação: 0,
        Lazer: 0,
        Pet: 0,
        Transporte: 0,
        'Assinaturas e serviços': 0,
        Investimentos: 0,
      },
    )
    setExpensesByCategory([
      {
        description: 'Casa',
        value: summary.Casa.toString(),
      },
      {
        description: 'Alimentação',
        value: summary.Alimentação.toString(),
      },
      {
        description: 'Saúde',
        value: summary.Saúde.toString(),
      },
      {
        description: 'Outros',
        value: summary.Outros.toString(),
      },
      {
        description: 'Renda',
        value: summary.Renda.toString(),
      },
      {
        description: 'Renda extra',
        value: summary['Renda extra'].toString(),
      },
      {
        description: 'Educação',
        value: summary.Educação.toString(),
      },
      {
        description: 'Lazer',
        value: summary.Lazer.toString(),
      },
      {
        description: 'Pet',
        value: summary.Pet.toString(),
      },
      {
        description: 'Transporte',
        value: summary.Transporte.toString(),
      },
      {
        description: 'Assinaturas e serviços',
        value: summary['Assinaturas e serviços'].toString(),
      },
      {
        description: 'Investimentos',
        value: summary.Investimentos.toString(),
      },
    ])
  }

  return (
    <ExpensesContext.Provider
      value={{
        expensesByCategory,
        filterExpensesTransactions,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
