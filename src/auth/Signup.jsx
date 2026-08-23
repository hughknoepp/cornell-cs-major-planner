import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const ERROR_MESSAGES = {
    email_in_use: 'An account with that email already exists.',
    invalid_input: 'Please enter a valid email and a password of at least 8 characters.',
}

export default function Signup() {
    const { signup } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (password.length < 8) {
            setError(ERROR_MESSAGES.invalid_input)
            return
        }

        setSubmitting(true)
        try {
            await signup(email, password)
            navigate('/')
        } catch (err) {
            setError(ERROR_MESSAGES[err.body?.error] || 'Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p role="alert">{error}</p>}
                <button type="submit" disabled={submitting}>{submitting ? 'Creating account...' : 'Create Account'}</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    )
}
