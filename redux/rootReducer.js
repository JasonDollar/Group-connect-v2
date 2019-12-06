import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import authReducer from './auth/auth.reducer'
import postsReducer from './posts/posts.reducer'

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  posts: postsReducer,
})