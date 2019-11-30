import React, { useEffect, useState, useContext } from 'react'
// import { fetchGroupPosts } from '../lib/api'
import SinglePost from './SinglePost'
import { PostContext } from '../lib/PostProvider'

const Posts = ({ groupId, groupPosts }) => {

  const { posts, setPosts } = useContext(PostContext)

  useEffect(() => {
    if (groupPosts) {

      setPosts(groupPosts)
    }
  }, [groupPosts])

  
  return (
    <div>
      {posts && posts.map(item => <SinglePost key={item._id} post={item} />)}
    </div>
  )
}


export default Posts
