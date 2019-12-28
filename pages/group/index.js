import React from 'react'
import Link from 'next/link'
import { getAllGroups } from '../../lib/api'

const GroupPage = props => (
  <div>
    <p>groups all</p>
    <ul>

      {props.groups && props.groups.map(item => (
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
)



export default GroupPage

GroupPage.getInitialProps = async () => {
  try {
    const res = await getAllGroups()

    return { groups: res.data ? res.data.groups : null, error: null }

  } catch (e) {
    return { error: e, groups: null }
  }
}