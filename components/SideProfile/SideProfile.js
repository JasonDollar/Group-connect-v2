import React, { useEffect, memo } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 20%;
  margin-right: 10rem;
  background: ${props => props.theme.orangeColor};
`

const SideProfile = ({ user }) => {
  console.log('user', user)
  if (!user) {
    return (
      <Container>
        No user
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
