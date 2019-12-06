import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SinglePost from './SinglePost'


const Posts = () => {
  const posts = useSelector(state => state.posts.groupPosts)

  return (
    <div>
      {posts && posts.map(item => <SinglePost key={item._id} post={item} />)}
    </div>
  )
}



export default Posts
