import { ReactNode, createContext, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface AuthContextData {
  user: FirebaseAuthTypes.User | null
  isAuthenticated: boolean
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)

    return subscriber
  }, [])
  console.log('Console do usuario', user)
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
