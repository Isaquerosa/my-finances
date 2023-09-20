/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

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

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <AuthContextProvider>
        <CalendarModalProvider>
          {fontsLoader ? <Routes /> : <Loading />}
        </CalendarModalProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}
