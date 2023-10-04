import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import theme from '../../theme'

const COLORS = {
  gray: theme.COLORS.GRAY_100,
  darkGray: theme.COLORS.GRAY_600,
  white: theme.COLORS.WHITE,
  blue: theme.COLORS.BLUE,
  red: theme.COLORS.RED,
  green: theme.COLORS.GREEN,
}

export interface TextContainerProps {
  color?: keyof typeof COLORS
  fontSize?: 'sm' | 'md'
}

export const TextContainer = styled(Text)<TextContainerProps>`
  color: ${(props) => (props.color ? COLORS[props.color] : '#ecf2f7')};
  font-size: ${(props) =>
    props.fontSize === 'sm' ? theme.FONT_SIZE.SM : theme.FONT_SIZE.MD}px;

  font-family: ${theme.FONT_FAMILY.REGULAR};
`
