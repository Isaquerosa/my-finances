import { TouchableOpacity, View } from 'react-native'
import { SignOut } from 'phosphor-react-native'
import { Text } from '../Text'
import { ViewFlex } from '../ViewFlex'
import { HeaderContainer } from './styles'

import auth from '@react-native-firebase/auth'

export function Header() {
  function handleSignOut() {
    auth().signOut()
  }
  return (
    <HeaderContainer>
      <View style={{ marginLeft: 38, marginTop: 32 }}>
        <Text fontSize="md">My Finances</Text>
      </View>
      <ViewFlex mr={38} mt={36}>
        <TouchableOpacity onPress={handleSignOut}>
          <SignOut color="#ecf2f7" size={32} weight="bold" />
        </TouchableOpacity>
      </ViewFlex>
    </HeaderContainer>
  )
}
