import React, { useState } from 'react'
import { NextPage } from 'next';
import Router from 'next/router'
import { createGroup } from '../../lib/api'

const create: NextPage<{}> = () => {
  const [groupName, setGroupName] = useState<string>('')
  const [isPrivate, toggePrivate] = useState<boolean>(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await createGroup(groupName, isPrivate)
    console.log(res)
    if (res.statusText = 'Created') {
      Router.push({
        pathname: `/group/${res.data.data.hashid}`,
        query: { n: res.data.data.slug },
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
