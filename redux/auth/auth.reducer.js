import actionTypes from './auth.types'

const initialState = {
  loading: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.AUTH_START:
      return { ...state, loading: true, error: null }
    case actionTypes.AUTH_SUCCESS:
      return { ...state, loading: false }
    case actionTypes.AUTH_FAILURE:
      return { ...state, loading: false, error: payload }

    default:
      return state
  }
}
