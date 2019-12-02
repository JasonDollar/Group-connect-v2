import React, { useEffect, memo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { selectCurrentUser, selectUser } from '../../redux/user/user.selectors'


const Container = styled.div`
  width: 20%;
  margin-right: 10rem;
  background: ${props => props.theme.orangeColor};
`

const SideProfile = () => {
  const { loading, error } = useSelector(state => state.user)
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser, loading)
  if (loading) {
    return (
      <Container>
        Loading
      </Container>
    )
  }
  if (!currentUser) {
    return (
      <Container>
        No currentUser
        {error && error}
      </Container>
    )
  }

  return (
    <Container>
      {currentUser.name}
    </Container>
  )
}

export default SideProfile
