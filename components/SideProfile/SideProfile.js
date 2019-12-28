import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const Container = styled.div`
  width: 20%;
  margin-right: 10rem;
  background: ${props => props.theme.orangeColor};
`

const SideProfile = ({ user }) => {
  const { loading, error } = useSelector(state => state.user)

  if (!user) {
    return (
      <Container>
        No currentUser
        {/* {error && error} */}
      </Container>
    )
  }

  return (
    <Container>
      {user.name}
    </Container>
  )
}

export default SideProfile
