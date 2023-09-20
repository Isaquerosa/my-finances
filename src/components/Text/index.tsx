import { ReactNode } from 'react'
import { TextContainer, TextContainerProps } from './styles'

interface TextProps extends TextContainerProps {
  children: ReactNode
}

export function Text({
  children,
  color,
  fontSize = 'sm',
  ...props
}: TextProps) {
  return (
    <TextContainer {...props} color={color} fontSize={fontSize}>
      {children}
    </TextContainer>
  )
}
