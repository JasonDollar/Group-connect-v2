import React, { useState } from 'react'
import Router from 'next/router'
import { createGroup } from '../../lib/api'

const create = () => {
  const [groupName, setGroupName] = useState('')
  const [isPrivate, toggePrivate] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const res = await createGroup(groupName, isPrivate)

    if (res.statusText = 'Created') {
      Router.push({
        pathname: `/group/${res.data.group.hashid}`,
        query: { n: res.data.group.slug },
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="groupName">Group name:</label>
          <input type="text" id="groupName" value={groupName} onChange={e => setGroupName(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default create
