import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import { loginUser } from '../redux/auth/auth.actions'

const signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const { loading, error: storeError } = useSelector(state => state.auth)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) return

    dispatch(loginUser(email, password, Router))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {storeError && <p>{storeError}</p>}
        <button type="submit" disabled={loading}>Submit</button>
      </form>
    </div>
  )
}

export default signup
 