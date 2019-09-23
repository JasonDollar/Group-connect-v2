import React, { useState } from 'react'
import { NextPage } from 'next'
import { createAccount } from '../lib/api'

const signup: NextPage<{}> = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await createAccount(name, email, password, passwordConfirm)
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default signup
