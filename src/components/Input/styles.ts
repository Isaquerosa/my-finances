import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const InputContainer = styled(TextInput)`
  flex: 1;
  min-height: 42px;
  max-height: 42px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  border-radius: 6px;
  padding: 8px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 6px;
`

export const ErrorMessage = styled.Text`
  position: absolute;
  top: 100%;
  padding-top: 5px;
  align-items: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.ERROR};
  `}
`
