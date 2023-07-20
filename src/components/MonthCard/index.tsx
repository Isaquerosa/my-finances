import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

import { ViewFlex } from '../ViewFlex'

interface MonthCardProps extends TouchableOpacityProps {
  isActive: boolean
  name: string
}

export function MonthCard({ isActive, name, ...props }: MonthCardProps) {
  return (
    <ViewFlex flexDirection="row">
      <TouchableOpacity
        style={{
          width: 80,
          height: 45,
          borderRadius: 6,
          marginRight: 12,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isActive ? '#66bce8' : '#8D8D99',
        }}
        {...props}
      >
        <Text style={{ color: '#fff' }}>{name}</Text>
      </TouchableOpacity>
    </ViewFlex>
  )
}
