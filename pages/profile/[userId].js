import React from 'react'
import styled from 'styled-components'
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
  console.log('profile', user)
  return (
    <Container>
      <SideProfile user={user} />
      user profile by id
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
