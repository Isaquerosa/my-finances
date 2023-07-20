import { Container, LoadingIndicator, LoadingIndicatorProps } from './styles'

interface LoadingProps extends LoadingIndicatorProps {}

export function Loading({ color = 'blue' }: LoadingProps) {
  return (
    <Container>
      <LoadingIndicator color={color} />
    </Container>
  )
}
