import React, { useState } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { createUserAccount } from '../redux/auth/auth.actions'

const signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [componentError, setComponentError] = useState('')
  const dispatch = useDispatch()
  const { loading, error: storeError } = useSelector(state => state.auth)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!name || !email || !password || !passwordConfirm) {
      setComponentError('You must fill all fields')
      // IDEA - add red border for not filled fields
    } else if (password !== passwordConfirm) {
      setComponentError('Your password does not match')
      return
    }
    setComponentError('')
    dispatch(createUserAccount(name, email, password, passwordConfirm, Router))

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
        {componentError && <p>{componentError}</p>}
        {storeError && <p>{storeError}</p>}
        <button type="submit" disabled={loading}>Submit</button>
      </form>
    </div>
  )
}

export default signup
