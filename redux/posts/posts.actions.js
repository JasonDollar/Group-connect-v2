import actionTypes from './posts.types'
import axios from '../../lib/api'
import baseUrl from '../../lib/baseUrl'

const getGroupPostsStart = () => ({
  type: actionTypes.GET_GROUP_POSTS_START,
})

export const saveGroupPostsToStore = posts => ({
  type: actionTypes.SAVE_GROUP_POSTS_TO_STORE,
  payload: posts,
})

const getGroupPostsFailure = errorMsg => ({
  type: actionTypes.GET_GROUP_POSTS_START,
  payload: errorMsg,
})

// maybe come in handy in some cases
export const getGroupPosts = groupId => async dispatch => {
  dispatch(getGroupPostsStart()) 
  try {
    const res = await axios.get(`${baseUrl}/api/v_1/posts/${groupId}`)
    if (res.statusText !== 'OK') {
      dispatch(getGroupPostsFailure(res.data.message))
    }
    dispatch(saveGroupPostsToStore(res.data.posts))
  } catch (e) {
    dispatch(getGroupPostsFailure(e.message))
  }
}

export const addPost = (groupId, text) => async dispatch => {
  dispatch({ type: actionTypes.ADD_POST_START })
  try {
    const res = await axios.post(`${baseUrl}/api/v_1/posts/${groupId}/create`, { text }, { withCredentials: true })

    if (res.statusText !== 'Created') {
      dispatch({ type: actionTypes.ADD_POST_FAILURE })
    }
    dispatch({ type: actionTypes.ADD_POST, payload: res.data.post })

  } catch (e) {
    dispatch({ type: actionTypes.ADD_POST_FAILURE })
  }
}