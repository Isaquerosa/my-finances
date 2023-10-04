import { Picker } from '@react-native-picker/picker'
import { CATEGORY_OPTIONS } from '../../utils/categoryColor'

export type CategoryProps = 'Casa' | 'Alimentação' | 'Outros'

interface CategoryPickerProps {
  selectedValue: CategoryProps
  onValueChange: (value: CategoryProps) => void
}

export function CategoryPicker({
  selectedValue,
  onValueChange,
}: CategoryPickerProps) {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: CategoryProps) => onValueChange(itemValue)}
      style={{
        backgroundColor: '#323238',
        minHeight: 50,
        maxHeight: 50,
        flex: 1,
        color: '#ecf2f7',
      }}
    >
      {CATEGORY_OPTIONS.map((item) => (
        <Picker.Item
          style={{
            backgroundColor: '#323238',
            color: '#ecf2f7',
            minHeight: 42,
            maxHeight: 42,
          }}
          key={item.label}
          label={item.label}
          value={item.label}
        />
      ))}
    </Picker>
  )
}
