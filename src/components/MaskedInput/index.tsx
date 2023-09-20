import { Input, InputProps } from '../Input'

interface MaskedInputProps extends InputProps {
  maskFn: (value: any) => string
  unMaskFn?: (value: string) => string
}

export function MaskedInput({ maskFn, unMaskFn, ...props }: MaskedInputProps) {
  return <Input value={maskFn(props.value)} {...props} />
}
