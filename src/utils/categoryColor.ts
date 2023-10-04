export const CATEGORY_OPTIONS = [
  {
    label: 'Casa',
    value: '0',
    color: '#2e77d1',
  },
  {
    label: 'Alimentação',
    value: '1',
    color: '#e35b5c',
  },
  {
    label: 'Saúde',
    value: '2',
    color: '#66bce8',
  },
  {
    label: 'Outros',
    value: '3',
    color: '#7b8389',
  },
  {
    label: 'Renda',
    value: '4',
    color: '#00875F',
  },
  {
    label: 'Renda extra',
    value: '5',
    color: '#00B37E',
  },
  {
    label: 'Educação',
    value: '6',
    color: '#6A5ACD',
  },
  {
    label: 'Lazer',
    value: '7',
    color: '#00FFFF',
  },
  {
    label: 'Pet',
    value: '8',
    color: '#FFDEAD',
  },
  {
    label: 'Transporte',
    value: '9',
    color: '#00008B',
  },
  {
    label: 'Assinaturas e serviços',
    value: '10',
    color: '#8B0000',
  },
  {
    label: 'Investimentos',
    value: '11',
    color: '#FFD700',
  },
]

export const CATEGORY_COLOR = {
  Casa: '#2e77d1',
  Alimentação: '#e35b5c',
  Saúde: '#66bce8',
  Outros: '#7b8389',
  Renda: '#00875F',
  'Renda extra': '#00B37E',
  Educação: '#6A5ACD',
  Lazer: '#00FFFF',
  Pet: '#FFDEAD',
  Transporte: '#00008B',
  'Assinaturas e serviços': '#8B0000',
  Investimentos: '#FFD700',
}

export function CategoryColors(category: string) {
  return CATEGORY_COLOR[category]
}
