import React from 'react'
import Link from 'next/link'

const SingleComment = ({ comment }) => (
  <div>
    <p>{comment.text}</p>
    <Link
      href="/profile/[userId]"
      as={`/profile/${comment.createdBy.slug}`}
    >
      <a>
Created by: {comment.createdBy.name}

      </a>
    </Link>
  </div>
)

export default SingleComment
/*
createdAt(pin):"2019-11-07T19:18:17.261Z"
_id(pin):"5dc46e207d650a3638b4eea4"
text(pin):"Some comment"
updatedAt(pin):"2019-11-07T19:18:17.261Z"
id(pin):"5dc46e207d650a3638b4eea4"
*/