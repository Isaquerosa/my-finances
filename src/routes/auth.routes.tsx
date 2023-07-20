import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { SignUp } from '../screens/SignUp'
import { SignIn } from '../screens/SignIn'
import { ForgotPassword } from '../screens/ForgotPassword'

type AuthRoutesProps = {
  signIn: undefined
  signUp: undefined
  forgotPassword: undefined
}

export interface AuthNavigatorRoutesProps
  extends NativeStackNavigationProp<AuthRoutesProps> {}

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  )
}
