import { useState } from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'

import auth from '@react-native-firebase/auth'

import { Container } from './styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../../components/Text'
import { Input } from '../../components/Input'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  function handleResetPassword() {
    setIsLoading(true)
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('E-mail enviado com sucesso')
        navigation.navigate('signIn')
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }
  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text fontSize="md">Esqueci minha senha</Text>

        <View style={{ marginTop: 24, marginBottom: 24, width: '100%' }}>
          <Input id="email" label="E-mail" onChangeText={setEmail} />
        </View>
        <View style={{ width: '100%', marginTop: 42, marginBottom: 42 }}>
          <Button
            title="Enviar"
            onPress={handleResetPassword}
            size="lg"
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
