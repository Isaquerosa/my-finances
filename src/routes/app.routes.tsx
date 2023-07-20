import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { Home } from '../screens/Home'
import { TransactionRegister } from '../screens/TransactionRegister'
import { House, Plus } from 'phosphor-react-native'
import { Platform } from 'react-native'

type AppRoutesProps = {
  home: undefined
  transactionRegister: undefined
}

export interface AppNavigatorRoutesProps
  extends BottomTabNavigationProp<AppRoutesProps> {}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

const TAB_BAR_STYLE = {
  marginBottom: 6,
  marginTop: -6,
  fontSize: 12,
  color: '#fff',
}

export function AppRoutes() {
  const { COLORS } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.BLUE_LIGHT,
        tabBarInactiveTintColor: COLORS.GRAY_200,
        tabBarStyle: {
          backgroundColor: COLORS.GRAY_600,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 66 : 96,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: TAB_BAR_STYLE,
          tabBarIcon: ({ color }) => <House color={color} size={32} />,
        }}
      />
      <Screen
        name="transactionRegister"
        component={TransactionRegister}
        options={{
          tabBarLabel: 'Nova transação',
          tabBarLabelStyle: TAB_BAR_STYLE,
          tabBarIcon: ({ color }) => <Plus color={color} size={32} />,
        }}
      />
    </Navigator>
  )
}
