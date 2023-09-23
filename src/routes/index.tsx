import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

import { AppRoutes } from './app.routes'
import { Header } from '../components/Header'
import { useAuth } from '../hooks/useAuth'
import { useTheme } from 'styled-components/native'

export function Routes() {
  const { user } = useAuth()
  const { COLORS } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        {user ? (
          <>
            <Header />
            <AppRoutes />
          </>
        ) : (
          <AuthRoutes />
        )}
      </NavigationContainer>
    </View>
  )
}
