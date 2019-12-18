import React from 'react'
import Link from 'next/link'
import { getSinglePost } from '../../../../lib/api'
import Comments from '../../../../components/Post/Comments'

const PostPage = ({ post, createdInGroup }) => {
  console.log(post)
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
      <p>
        Created by:
        <Link
          href="/profile/[userId]"
          as={`/profile/${post.createdBy.slug}`}
        >
          <a>{post.createdBy.name}</a>
        </Link>
      </p>
      <Comments comments={post.comments} />
    </div>
  )
}

PostPage.getInitialProps = async ctx => {
  const { id, postId } = ctx.query

  const post = await getSinglePost(id, postId)
  return post
}

export default PostPage
