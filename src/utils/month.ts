// const MONTHS = {
//   Janeiro: {
//     start: new Date('2023-01-01'),
//     end: new Date('2023-31-01'),
//   },
//   Fevereiro: {
//     start: new Date('2023-01-02'),
//     end: new Date('2023-28-02'),
//   },
//   Março: {
//     start: new Date('2023-01-03'),
//     end: new Date('2023-31-03'),
//   },
//   Abril: {
//     start: new Date('2023-01-04'),
//     end: new Date('2023-31-04'),
//   },
//   Maio: {
//     start: new Date('2023-01-05'),
//     end: new Date('2023-31-05'),
//   },
//   Junho: {
//     start: new Date('2023-01-06'),
//     end: new Date('2023-31-06'),
//   },
//   Julho: {
//     start: new Date('2023-01-07'),
//     end: new Date('2023-31-07'),
//   },
//   Agosto: {
//     start: new Date('2023-01-08'),
//     end: new Date('2023-31-08'),
//   },
//   Setembro: {
//     start: new Date('2023-01-09'),
//     end: new Date('2023-31-09'),
//   },
//   Outubro: {
//     start: new Date('2023-01-10'),
//     end: new Date('2023-31-10'),
//   },
//   Novembro: {
//     start: new Date('2023-01-11'),
//     end: new Date('2023-31-11'),
//   },
//   Dezembro: {
//     start: new Date('2023-01-12'),
//     end: new Date('2023-31-12'),
//   },
// }
const MONTHS = {
  Janeiro: '01',
  Fevereiro: '02',
  Março: '03',
  Abril: '04',
  Maio: '05',
  Junho: '06',
  Julho: '07',
  Agosto: '08',
  Setembro: '09',
  Outubro: '10',
  Novembro: '11',
  Dezembro: '12',
}

export function Month(name: string | null) {
  return MONTHS[name]
}
