import React, { useEffect, useState, useContext } from 'react'
import { fetchGroupPosts } from '../lib/api'
import SinglePost from './SinglePost'
import { PostContext } from '../lib/PostProvider'

const Posts = ({ groupId, groupPosts }) => {

  const { posts, setPosts } = useContext(PostContext)
  // console.log(posts)
  useEffect(() => {
    setPosts(groupPosts)
  }, [])
  // useEffect(() => {
  //   fetchGroupPosts(groupId).then(res => {
  //     if (res.statusText === 'OK') {
  //       // console.log(res.data.posts)
  //       setPosts(res.data.posts)
  //     }
  //   })
  // }, [groupId])
  
  return (
    <div>
      {posts && posts.map(item => <SinglePost key={item._id} post={item} />)}
    </div>
  )
}


export default Posts
