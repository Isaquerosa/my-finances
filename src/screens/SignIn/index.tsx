import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'

import auth from '@react-native-firebase/auth'
import { Button } from '../../components/Button'
import { Container } from './styles'
import { Input } from '../../components/Input'
import { Text } from '../../components/Text'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  function handleSignIn() {
    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  function handleSignUp() {
    navigation.navigate('signUp')
  }

  function handleForgotPassword() {
    navigation.navigate('forgotPassword')
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text fontSize="md">Login</Text>

        <View style={{ marginTop: 42, marginBottom: 24, width: '100%' }}>
          <Input id="email" label="E-mail" onChangeText={setEmail} />
        </View>
        <View style={{ marginTop: 42, marginBottom: 42, width: '100%' }}>
          <Input
            id="password"
            label="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 42,
            marginBottom: 42,
          }}
        >
          <Button
            title="Entrar"
            size="lg"
            isDisabled={email === '' || password === ''}
            onPress={handleSignIn}
            isLoading={isLoading}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 42,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Esqueci senha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp}>
            <Text>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}
