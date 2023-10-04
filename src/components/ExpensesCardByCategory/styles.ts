import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../theme'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 62px;

  background-color: ${theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 6px;
`
interface TagProps {
  color: string
}

export const Tag = styled.View<TagProps>`
  width: 10px;
  height: 80px;

  margin-right: 16px;
  background-color: ${(props) => props.color};
`

export const Name = styled.Text`
  flex: 1;
  margin-top: 28px;

  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`
interface ValueProps {
  typeTransaction: 'expense' | 'revenue'
}

export const Value = styled.Text<ValueProps>`
  color: #e52e4d;

  margin-top: 28px;
  margin-right: 16px;
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(MaterialIcons).attrs(({ theme }: any) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`

export const ButtonDetails = styled.TouchableOpacity`
  background-color: transparent;
`
