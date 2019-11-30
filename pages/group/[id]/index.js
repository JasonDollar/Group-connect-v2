import React, { useEffect, useState } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import { getSingleGroupInfo } from '../../../lib/api'
import Posts from '../../../components/Posts'
import CreatePost from '../../../components/CreatePost'


const groupPage = ({ groupInfo }) => {
  const router = useRouter()
  const { id } = router.query


  if (!groupInfo) {
    return <div>Error</div>
  }
  return (
    <div>
      <h1>{groupInfo && groupInfo.name}</h1>
      <CreatePost />
      <Posts groupId={id} groupPosts={groupInfo.posts} />
    </div>
  )
}

export default groupPage

groupPage.getInitialProps = async ctx => {
  // console.log(req.headers.cookie)
  try {
    const { jwt } = cookies(ctx)
    const res = await getSingleGroupInfo(ctx.query.id, jwt)
    // console.log(res)
    // const data = res.json()
    // console.log(res.data)
  
    if (res.statusText === 'OK') {
      // console.log(res.data.group)
      return { groupInfo: res.data.group }
  
    }
  } catch (e) {
    return { groupInfo: null }
  } 


}