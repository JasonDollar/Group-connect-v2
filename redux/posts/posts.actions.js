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