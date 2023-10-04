/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import theme from './src/theme'
import { AuthContextProvider } from './src/contexts/auth-context'
import { CalendarModalProvider } from './src/contexts/CalendarModal-context'
import { ExpensesProvider } from './src/contexts/Expenses-context'

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <AuthContextProvider>
          <ExpensesProvider>
            <CalendarModalProvider>
              {fontsLoader ? <Routes /> : <Loading />}
            </CalendarModalProvider>
          </ExpensesProvider>
        </AuthContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
