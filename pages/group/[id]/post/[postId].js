import React from 'react'
import Link from 'next/link'
import { getSinglePost } from '../../../../lib/api'

const PostPage = ({ post, createdInGroup }) => {
  console.log(createdInGroup)
  if (!post) {
    return (
      <div>
        <h2>Nothing to show</h2>
      </div>
    )
  }
  return (
    <div>
      <p>{post.text}</p>
      <p>
        Created in:
        <Link
          href="/group/[id]"
          as={`/group/${createdInGroup.hashid}`}
        >
          <a>{createdInGroup.name}</a>
        </Link>
      </p>
    </div>
  )
}

PostPage.getInitialProps = async ctx => {
  const { id, postId } = ctx.query

  const post = await getSinglePost(id, postId)
  return post
}

export default PostPage
