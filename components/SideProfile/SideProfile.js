import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Container = styled.div`
  width: 20%;
  margin-right: 10rem;
  background: ${props => props.theme.orangeColor};
`

const SideProfile = () => {
  const { loading, error } = useSelector(state => state.user)
  const currentUser = useSelector(selectCurrentUser)

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
