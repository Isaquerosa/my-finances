import { Container, Name, Tag, Value } from './styles'
import { ViewFlex } from '../ViewFlex'
import { formatBrlCoin } from '../../utils/masks'
import { CategoryColors } from '../../utils/categoryColor'

interface ExpensesCardByCategoryProps {
  desciption: string
  value: string
}

export function ExpensesCardByCategory({
  desciption,
  value,
}: ExpensesCardByCategoryProps) {
  return (
    <>
      {value > '0' && (
        <Container>
          <ViewFlex flexDirection="row" w="100%">
            <Tag color={CategoryColors(desciption)} />
            <Name>{desciption}</Name>
            <Value>{formatBrlCoin(value)}</Value>
          </ViewFlex>
        </Container>
      )}
    </>
  )
}
