import actionTypes from './posts.types'

const initialState = {
  groupPosts: [],
  groupPostsLoading: false,
  groupPostsError: null,
  singlePostLoading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.GET_GROUP_POSTS_START:
      return { ...state, groupPostsLoading: true, error: null }
    case actionTypes.SAVE_GROUP_POSTS_TO_STORE:
      return { ...state, groupPosts: [...payload], groupPostsLoading: false }
    case actionTypes.GET_GROUP_POSTS_FAILURE:
      return { ...state, groupPostsError: payload }
    case actionTypes.ADD_POST: 
      return { ...state, groupPosts: [...state.groupPosts, payload], singlePostLoading: false }
    case actionTypes.ADD_POST_START: 
      return { ...state, singlePostLoading: true }
    case actionTypes.ADD_POST_FAILURE: 
      return { ...state, singlePostLoading: false }
      // add error message
    default:
      return state
  }
}
