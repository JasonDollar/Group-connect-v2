import React from 'react'
import SingleComment from './SingleComment'

const Comments = ({ comments }) => (
  comments.map(item => <SingleComment key={item._id} comment={item} />)
)

export default Comments
