import { ButtonDetails, Container, Icon, Name, Value } from './styles'
import { ViewFlex } from '../ViewFlex'
import { maskCurrency, maskDate } from '../../utils/masks'
import { DotsThreeVertical } from 'phosphor-react-native'

interface ListCardProps {
  desciption: string
  value: string
  date: any
  typeTransaction: string
  onShowDetails?: () => void
}

export function ListCard({
  desciption,
  value,
  date,
  typeTransaction,
  onShowDetails,
}: ListCardProps) {
  console.log(date)
  return (
    <Container>
      <ViewFlex flexDirection="column" w="62%">
        <ViewFlex flexDirection="row">
          <Icon name="article" />
          <Name>{desciption}</Name>
        </ViewFlex>

        <ViewFlex flexDirection="row" mt={12}>
          <Icon name="attach-money" />
          <Value typeTransaction={typeTransaction}>
            {typeTransaction === 'expense' ? '- ' : '+ '}
            {maskCurrency(value)}
          </Value>
        </ViewFlex>
      </ViewFlex>
      <ViewFlex flexDirection="row" w="25%">
        <Name>{maskDate(date)}</Name>
      </ViewFlex>

      <ButtonDetails onPress={onShowDetails}>
        <DotsThreeVertical color="#fff" size={32} />
      </ButtonDetails>
    </Container>
  )
}
