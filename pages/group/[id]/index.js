import React, { useState, useEffect } from 'react'
import { parseCookies } from 'nookies'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleGroupInfo } from '../../../lib/api'
import Posts from '../../../components/Group/Posts'
import CreatePost from '../../../components/Group/CreatePost'
import { saveGroupPostsToStore } from '../../../redux/posts/posts.actions'
import { selectCurrentUser } from '../../../redux/user/user.selectors'


const groupPage = ({ groupInfo }) => {
  const [roleMember, setRoleMember] = useState(false)
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  useEffect(() => {
    if ((groupInfo && groupInfo.membersLength) && currentUser) {
      const isUserMember = groupInfo.members.filter(item => item.user._id === currentUser._id)

      if (isUserMember.length) {
        setRoleMember(isUserMember[0].role)
      }
    }
  }, [groupInfo, currentUser])

  if (!groupInfo) {
    return <div>Error</div>
  }
  
  dispatch(saveGroupPostsToStore(groupInfo.posts))

  return (
    <div style={{ width: '100%' }}>
      <h1>{groupInfo && groupInfo.name}</h1>
      <div>
        {groupInfo.membersLength !== 1 ? `${groupInfo.membersLength} members` : `${groupInfo.membersLength} member`}  
      </div>
      {roleMember ? <div>You're an {roleMember}</div> : <button>JOIN GROUP (PLACEHOLDER)</button> }
      {roleMember && <CreatePost />}
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