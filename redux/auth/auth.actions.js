import actionTypes from './auth.types'
import { saveUserInfoToStore } from '../user/user.actions'
import axios from '../../lib/api'
import baseUrl from '../../lib/baseUrl'

const authStart = () => ({
  type: actionTypes.AUTH_START,
})

const authSuccess = () => ({
  type: actionTypes.AUTH_SUCCESS,
})

const authFailure = payload => ({
  type: actionTypes.AUTH_FAILURE,
  payload,
})

export const loginUser = (email, password, router) => async dispatch => {
  dispatch(authStart())
  try {
    const res = await axios.post(`${baseUrl}/api/v_1/users/login`, { 
      email, password,
    }, {
      withCredentials: true,
    })
    if (res.statusText !== 'OK') {
      dispatch(authFailure(res.data.message))
    }
    if (res.data.user) {
      dispatch(authSuccess())
      dispatch(saveUserInfoToStore(res.data.user))
      router.push('/')
    }
  } catch (e) {
    dispatch(authFailure(e.message))
  }
}

export const createUserAccount = (name, email, password, passwordConfirm, router) => async dispatch => {
  dispatch(authStart())
  try {
    const res = await axios.post(`${baseUrl}/api/v_1/users/create`, { 
      name, email, password, passwordConfirm,
    })
    if (res.statusText !== 'OK') {
      dispatch(authFailure(res.data.message))
    }
    if (res.data.user) {
      dispatch(authSuccess())
      dispatch(saveUserInfoToStore(res.data.user))
      router.push('/')
    }
  } catch (e) {
    dispatch(authFailure(e.message))
  }
}