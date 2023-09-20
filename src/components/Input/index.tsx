import { TextInputProps, TextInput } from 'react-native'
import { ErrorMessage, InputContainer, Label } from './styles'
import { ReactNode, RefObject } from 'react'
import { maskCurrency } from '../../utils/masks'

export interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
  id?: string
  typePassword?: boolean
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  error?: ReactNode
  mask?: 'cep' | 'phone' | 'currency'
  inputMaskChange?: any
}

export function Input({
  inputRef,
  id,
  typePassword = false,
  size,
  label,
  error,
  maxLength,
  mask,
  inputMaskChange,
  ...props
}: InputProps) {
  function handleChange(text: string) {
    if (mask === 'currency') {
      const value = maskCurrency(text)
      inputMaskChange(value)
    }
  }
  return (
    <>
      <Label>{label}</Label>
      <InputContainer
        // ref={inputRef}
        id={`${id}-input`}
        secureTextEntry={typePassword}
        maxLength={maxLength}
        onChangeText={(text: any) => handleChange(text)}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}
