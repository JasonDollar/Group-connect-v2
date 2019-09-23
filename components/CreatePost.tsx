import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { createPost } from '../lib/api'

const CreatePost: React.FC<{}> = () => {
  const [postContent, setPostContent] = useState<string>('')
  const router = useRouter()
  const { id } = router.query
  const handleSubmitNewPost = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (postContent === '') return
    const res = await createPost(id, postContent)
    
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
