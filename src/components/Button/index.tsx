import { TouchableOpacityProps } from 'react-native'
import { ButtonStyleProps, Container, Title } from './styles'
import { Loading } from '../Loading'
import { Plus } from 'phosphor-react-native'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  type?: ButtonStyleProps
  size?: 'sm' | 'md' | 'lg'
  iconAdd?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  onPress: () => void
}

export function Button({
  title,
  size,
  type = 'PRIMARY',
  iconAdd,
  isLoading,
  isDisabled = false,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <Container
      type={type}
      disabled={isDisabled}
      size={size}
      onPress={onPress}
      {...props}
    >
      {iconAdd && !isLoading && <Plus color="#fff" size={24} />}
      <Title>{isLoading ? <Loading color="white" /> : title}</Title>
    </Container>
  )
}
