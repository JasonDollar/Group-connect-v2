import actionTypes from './posts.types'

const initialState = {
  groupPosts: [],
  groupPostsLoading: false,
  groupPostsError: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.GET_GROUP_POSTS_START:
      return { ...state, groupPostsLoading: true, error: null }
    case actionTypes.SAVE_GROUP_POSTS_TO_STORE:
      return { ...state, groupPosts: [...payload], groupPostsLoading: false }
    case actionTypes.GET_GROUP_POSTS_FAILURE:
      return { ...state, groupPostsError: payload }

    default:
      return state
  }
}
