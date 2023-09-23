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
          backgroundColor: isActive ? '#C4C4CC' : '#323238',
        }}
        {...props}
      >
        <Text style={{ color: isActive ? '#323238' : '#fff' }}>{name}</Text>
      </TouchableOpacity>
    </ViewFlex>
  )
}
