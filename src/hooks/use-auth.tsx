import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface AuthUser {
  [key: string]: any 
}

// Tipe untuk nilai konteks
interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (data: AuthUser) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const key = 'authUser'

// Ambil data dari localStorage
const getLocalData = (): AuthUser | null => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch {
    return null
  }
}

// Simpan atau hapus user ke localStorage
const setStoredUser = (user: AuthUser | null): void => {
  if (user) {
    localStorage.setItem(key, JSON.stringify(user))
  } else {
    localStorage.removeItem(key)
  }
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProviderContext = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(getLocalData())
  const isAuthenticated = !!user

  const logout = useCallback(async () => {
    setStoredUser(null)
    setUser(null)
  }, [])

  const login = useCallback(async (data: AuthUser) => {
    setStoredUser(data)
    setUser(data)
  }, [])

  useEffect(() => {
    setUser(getLocalData())
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [isAuthenticated, user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProviderContext')
  }
  return context
}
