import React, { useEffect, useState } from 'react'
import { fetchGroupPosts } from '../lib/api'
import SinglePost from './SinglePost'

interface Post {
  text: string,
  _id: string
}

const Posts: React.FC<{groupId: string | string[]}> = ({ groupId }) => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetchGroupPosts(groupId).then(res => {
      if (res.data) {
        setPosts(res.data.data)
      }
    })
  }, [])
  const updatePosts = (newPost: any) => setPosts(Object.assign(posts, newPost))
  return (
    <div>
      {posts.length > 0 && posts.map(item => <SinglePost key={item._id} post={item} />)}
    </div>
  )
}


export default Posts
