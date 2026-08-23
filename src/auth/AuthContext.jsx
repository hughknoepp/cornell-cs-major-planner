import { createContext, useContext, useEffect, useState } from 'react'
import { apiFetch } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiFetch('/auth/me')
            .then(({ user }) => setUser(user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false))
    }, [])

    const signup = async (email, password) => {
        const { user } = await apiFetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })
        setUser(user)
    }

    const login = async (email, password) => {
        const { user } = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })
        setUser(user)
    }

    const logout = async () => {
        await apiFetch('/auth/logout', { method: 'POST' })
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
