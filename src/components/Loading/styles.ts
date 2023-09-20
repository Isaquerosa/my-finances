import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export interface LoadingIndicatorProps {
  color?: 'white' | 'blue'
}

export const LoadingIndicator = styled.ActivityIndicator<LoadingIndicatorProps>`
  color: ${(props) => (props.color === 'white' ? '#fff' : '#2e77d1')};
`
