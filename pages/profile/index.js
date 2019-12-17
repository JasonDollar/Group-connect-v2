import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { getUserGroups } from '../../lib/api' // switch later for user's groups
import SideProfile from '../../components/SideProfile/SideProfile'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Container = styled.div`
  display: flex;
  width: 100%;
`

const ProfilePage = props => {
  const [userGroups, setUserGroups] = useState([])
  const currentUser = useSelector(selectCurrentUser)
  useEffect(() => {
    (async () => {
      const res = await getUserGroups()
      if (res.status = 'success') {
        setUserGroups(res.groups)
      }
    })()
  }, [])
  return (
    <Container>
      <SideProfile user={currentUser} />
      <div>
  
        <h2>Groups with user as a member</h2>{/* make it shorter */}
        <ul>
  
          {userGroups && userGroups.map(item => (
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
        {/* {props.error && <p>{props.error.response.data.message}</p>} */}
      </div>
    </Container>
  )
}



export default ProfilePage

// ProfilePage.getInitialProps = async () => {
//   try {
//     const res = await getAllGroups()

//     return { groups: res.data ? res.data.groups : null, error: null }

//   } catch (e) {
//     return { error: e, groups: null }
//   }
// }