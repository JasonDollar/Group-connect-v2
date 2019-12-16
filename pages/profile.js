import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { getAllGroups } from '../lib/api' // switch later for user's groups
import SideProfile from '../components/SideProfile/SideProfile'

const Container = styled.div`
  display: flex;
  width: 100%;
`

const ProfilePage = props => (
  <Container>
    <SideProfile />
    <div>

      <p>profile</p>
      <ul>

        {props.groups && props.groups.map(item => (
          <li key={item.id}>
            <Link
              as={`/group/${item.hashid}?n=${item.slug}`}
              href="/group/[id]?n=slug"
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



export default ProfilePage

ProfilePage.getInitialProps = async () => {
  try {
    const res = await getAllGroups()

    return { groups: res.data ? res.data.groups : null, error: null }

  } catch (e) {
    return { error: e, groups: null }
  }
}