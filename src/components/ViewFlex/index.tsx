import { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

interface ViewFlexProps extends ViewProps {
  flex?: number
  w?: number | string
  h?: number | string
  mt?: number
  mb?: number
  mr?: number
  ml?: number
  gap?: number
  bgColor?: string
  items?: 'center'
  justify?: 'space-between' | 'center'
  flexDirection?: 'column' | 'row'
  children: ReactNode
}

export function ViewFlex({
  flex,
  children,
  w,
  h,
  mt,
  mb,
  mr,
  ml,
  gap,
  items,
  justify,
  flexDirection,
  bgColor,
  ...props
}: ViewFlexProps) {
  return (
    <View
      {...props}
      style={{
        flex,
        width: w,
        height: h,
        marginTop: mt,
        marginBottom: mb,
        marginRight: mr,
        marginLeft: ml,
        alignItems: items,
        justifyContent: justify,
        gap,
        flexDirection,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </View>
  )
}
