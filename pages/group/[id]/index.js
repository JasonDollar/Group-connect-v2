import React, { useEffect, useState } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import { getSingleGroupInfo } from '../../../lib/api'
import Posts from '../../../components/Posts'
import CreatePost from '../../../components/CreatePost'


const groupPage = ({ groupInfo }) => {
  // const [groupInfo, setGroupInfo] = useState({
  //   name: '',
  // })
  const router = useRouter()
  const { id } = router.query
  console.log(groupInfo)
  
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
      <h1>{groupInfo && groupInfo.name}</h1>
      <CreatePost />
      <Posts groupId={id} />
    </div>
  )
}

export default groupPage

groupPage.getInitialProps = async ctx => {
  // console.log(req.headers.cookie)
  const { jwt } = cookies(ctx)
  const res = await getSingleGroupInfo(ctx.query.id, jwt)
  // const data = res.json()
  // console.log(res.data)

  if (res.data) {

    return { groupInfo: res.data.group }

  }
  return { groupInfo: null }
}