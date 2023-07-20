import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

import { AppRoutes } from './app.routes'
import { Header } from '../components/Header'
import { useAuth } from '../hooks/useAuth'

export function Routes() {
  const { user } = useAuth()
  return (
    <View style={{ flex: 1 }}>
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
