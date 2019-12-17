import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import SinglePost from './SinglePost'


const Posts = ({ groupId }) => {
  const posts = useSelector(state => state.posts.groupPosts)

  return (
    <div>
      {posts && posts.map(item => (
        <Link
          key={item._id} 
          href="/group/[id]/post/[postId]"
          as={`/group/${groupId}/post/${item._id}`}
        >
          <a>
            <SinglePost post={item} />
          </a>

        </Link>
      ))}
    </div>
  )
}



export default Posts
