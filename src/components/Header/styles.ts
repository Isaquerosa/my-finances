import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 120px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
