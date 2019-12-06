import React from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getSingleGroupInfo } from '../../../lib/api'
import Posts from '../../../components/Posts'
import CreatePost from '../../../components/CreatePost'
import { saveGroupPostsToStore } from '../../../redux/posts/posts.actions'


const groupPage = ({ groupInfo }) => {
  const dispatch = useDispatch()


  if (!groupInfo) {
    return <div>Error</div>
  }
  
  dispatch(saveGroupPostsToStore(groupInfo.posts))

  return (
    <div>
      <h1>{groupInfo && groupInfo.name}</h1>
      <CreatePost />
      <Posts />
    </div>
  )
}

export default groupPage

groupPage.getInitialProps = async ctx => {
  // console.log(req.headers.cookie)
  try {
    const { jwt } = parseCookies(ctx)
    const res = await getSingleGroupInfo(ctx.query.id, jwt)

    if (res.statusText === 'OK') {
      return { groupInfo: res.data.group }
  
    }
  } catch (e) {
    return { groupInfo: null }
  } 


}