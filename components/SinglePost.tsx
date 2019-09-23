import React from 'react'

type Post = {
  _id: string,
  text: string,
}

interface Props {
  post: Post
}

const SinglePost: React.FC<Props> = ({ post }) => (
    <div>
      <p>{post.text}</p>
      
    </div>
)

export default SinglePost
