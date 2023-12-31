import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../theme'

export const Container = styled.View`
  width: 100%;
  height: 72px;

  background-color: ${theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;
  margin-top: 12px;

  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`
interface ValueProps {
  typeTransaction: 'expense' | 'revenue'
}

export const Value = styled.Text<ValueProps>`
  flex: 1;
  margin-top: 2px;
  color: ${(props: any) =>
    props.typeTransaction === 'expense' ? '#e52e4d' : '#00875F'};

  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const DeleteContainer = styled.TouchableOpacity`
  width: 90px;
  height: 72px;

  background-color: ${theme.COLORS.RED};

  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
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
  margin-top: 26px;
  margin-left: 12px;
`
