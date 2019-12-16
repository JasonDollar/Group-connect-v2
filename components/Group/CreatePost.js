import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { addPost } from '../../redux/posts/posts.actions'

const CreatePost = () => {
  const [postContent, setPostContent] = useState('')
  const dispatch = useDispatch()
  const { singlePostLoading } = useSelector(state => state.posts)
  
  const router = useRouter()
  const { id } = router.query
  const handleSubmitNewPost = async e => {
    e.preventDefault()
    if (postContent === '') return
    dispatch(addPost(id, postContent))

    // if (res.statusText === 'Created') {
    //   setPostContent('')
    //   // addPost(res.data.post)
    // }
  }
  return (
    <form onSubmit={handleSubmitNewPost}>
      <div>
        <label htmlFor="postContent">Create post:</label>
        <input type="text" id="postContent" value={postContent} onChange={e => setPostContent(e.target.value)} />
      </div>
      <button type="submit" disabled={singlePostLoading}>Create</button>
    </form>
  )
}

export default CreatePost