import axios from '../../lib/api'
import actionTypes from './user.types'
import baseUrl from '../../lib/baseUrl'

const fetchUserInfoStart = () => ({
  type: actionTypes.FETCH_USER_INFO_START,
})

const fetchUserInfoSuccess = payload => ({
  type: actionTypes.FETCH_USER_INFO_SUCCESS,
  payload,
})

const fetchUserInfoFailure = payload => ({
  type: actionTypes.FETCH_USER_INFO_FAILURE,
  payload,
})

export const saveUserInfoToStore = payload => ({
  type: actionTypes.SAVE_USER_INFO_TO_STORE,
  payload,
})

export const fetchUserInfo = () => async dispatch => {
  dispatch(fetchUserInfoStart())
  try {

    const res = await axios.get(`${baseUrl}/api/v_1/users/me`, {
      withCredentials: true,
    })
    
    if (res.statusText !== 'OK') throw new Error(res.statusText)
    
    dispatch(fetchUserInfoSuccess())
    dispatch(saveUserInfoToStore(res.data.user))
  } catch (e) {
    
    dispatch(fetchUserInfoFailure(e.message))
  }
}