import React, { useState } from 'react'
import { NextPage } from 'next';
import { loginUser } from '../lib/api'

interface Error {
  error?: {
    response?: {
      data?: {
        message?: string
      }
    }
  }
}

const signup: NextPage<{}> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await loginUser(email, password)
      console.log(res)
      localStorage.setItem('jwt', res.data.token)
    } catch (e) {
      console.log(e.message)
      setError(e.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default signup
 