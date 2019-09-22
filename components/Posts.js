import React, { useEffect, useState } from 'react'
import { fetchGroupPosts } from '../lib/api'
import SinglePost from './SinglePost'

const Posts = ({ groupId }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchGroupPosts(groupId).then(res => {
      if (res.data) {
        setPosts(res.data.data)
      }
    })
  }, [])
  const updatePosts = newPost => setPosts(...posts, newPost)
  return (
    <div>
      {posts.length > 0 && posts.map(item => <SinglePost key={item._id} post={item} />)}
    </div>
  )
}


export default Posts
