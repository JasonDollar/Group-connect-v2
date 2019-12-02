import actionTypes from './user.types'

const initialState = {
  currentUser: null,
  loading: true,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_USER_INFO_START: 
      return { ...state, loading: true, error: null }
    case actionTypes.FETCH_USER_INFO_SUCCESS:
      return {
        ...state, currentUser: payload, loading: false, error: null, 
      }
    case actionTypes.FETCH_USER_INFO_FAILURE:
      return { ...state, error: payload, loading: false }

    default:
      return state
  }
}