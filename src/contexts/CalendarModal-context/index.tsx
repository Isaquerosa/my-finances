import {
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from 'react'

interface CalendarModalContextData {
  selectedDate: string | number
  setSelectedDate: Dispatch<SetStateAction<string>>
}

interface CalendarModalProviderProps {
  children: ReactNode
}

const CalendarModalContext = createContext({} as CalendarModalContextData)

export function CalendarModalProvider({
  children,
}: CalendarModalProviderProps) {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <CalendarModalContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </CalendarModalContext.Provider>
  )
}

export const useCalendarModal = () => useContext(CalendarModalContext)
