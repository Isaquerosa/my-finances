import { useState } from 'react'
import { Alert, View, TouchableOpacity } from 'react-native'

import auth from '@react-native-firebase/auth'
import { Button } from '../../components/Button'
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input'
import { Text } from '../../components/Text'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  function handleCreateNewAccount() {
    setIsLoading(true)

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Conta criada com sucesso'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  function handleSignIn() {
    navigation.navigate('signIn')
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
        <Text fontSize="md">Cadastro de usuário</Text>

        <View style={{ marginTop: 24, marginBottom: 24, width: '100%' }}>
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
            title="Cadastrar"
            size="lg"
            isDisabled={email === '' || password === ''}
            onPress={handleCreateNewAccount}
            isLoading={isLoading}
          />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 42,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={handleSignIn}>
            <Text>Retornar para o Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}
