import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import { getSingleGroupInfo } from '../../../lib/api'
import Posts from '../../../components/Posts'
import CreatePost from '../../../components/CreatePost'

const groupPage: NextPage<{groupInfo: any}> = ({ groupInfo }) => {
  // const [groupInfo, setGroupInfo] = useState({
  //   name: '',
  // })
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  
  // useEffect(() => {
  //   getSingleGroupInfo(id)
  //     .then(res => {
  //       console.log(res)
  //       setGroupInfo(res.data.data)
  //     })

  // }, [])
  // console.log(groupInfo)
  return (
    <div>
      <h1>{groupInfo && groupInfo.data.name}</h1>
      <CreatePost />
      <Posts groupId={id} />
    </div>
  )
}

export default groupPage

groupPage.getInitialProps = async ctx => {
  // console.log(req.headers.cookie)
  const { jwt } = cookies(ctx)
  console.log(jwt)
  const res = await getSingleGroupInfo(ctx.query.id, jwt)
  // const data = res.json()
  // console.log(res.data)
  if (res.data) {
    return { groupInfo: res.data }

  }
  return { groupInfo: null }
}