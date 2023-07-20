import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonProps {
  type: ButtonStyleProps
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const BUTTON_SIZES = {
  sm: 24,
  md: 42,
  lg: 56,
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  flex-direction: row;
  min-height: ${(props) => (props.size ? BUTTON_SIZES[props.size] : 32)}px;
  max-height: ${(props) => (props.size ? BUTTON_SIZES[props.size] : 32)}px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.BLUE_LIGHT : theme.COLORS.BRAND_LIGHT};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`
