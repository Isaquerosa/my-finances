import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${theme.COLORS.GRAY_800};
`
