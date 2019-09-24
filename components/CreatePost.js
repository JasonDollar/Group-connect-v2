import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { createPost } from '../lib/api'
import { PostContext } from '../lib/PostProvider'

const CreatePost = () => {
  const [postContent, setPostContent] = useState('')
  const { addPost } = useContext(PostContext)
  const router = useRouter()
  const { id } = router.query
  const handleSubmitNewPost = async e => {
    e.preventDefault()
    if (postContent === '') return
    const res = await createPost(id, postContent)
    addPost(res.data.post)
  }
  return (
    <form onSubmit={handleSubmitNewPost}>
      <div>
        <label htmlFor="postContent">Create post:</label>
        <input type="text" id="postContent" value={postContent} onChange={e => setPostContent(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default CreatePost
