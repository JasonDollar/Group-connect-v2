import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getUserInfo } from '../../lib/api'
import SideProfile from '../../components/SideProfile/SideProfile'

const Container = styled.div`
  display: flex;
  width: 100%;
`

const UserProfilePage = ({ user, ...props }) => {
  if (!user) {
    return (
      <Container>
        <SideProfile user={null} />
        <h2>No user found</h2>
      </Container>
    )
  }
  
  return (
    <Container>
      <SideProfile user={user} />
      <div>

      <h2>user profile by id</h2>
      <ul>
  
        {user.groupsMember && user.groupsMember.map(item => (
          <li key={item.id}>
            <Link
              as={`/group/${item.hashid}`}
              href="/group/[id]"
            >
              <a>
                {item.name}
              </a>
            </Link>
  
          </li>
        ))}
      </ul>
      </div>
    </Container>
  )
}

UserProfilePage.getInitialProps = async ctx => {
  const { userId } = ctx.query
  const res = await getUserInfo(userId)
  // const post = await getSinglePost(id, postId)
  // return post
  if (res.status === 'success') {

    return { user: res.user }
  } 
  if (res.status === 'error') {
    return { user: null, message: res.message }
  }
  // return res
  
}

export default UserProfilePage
