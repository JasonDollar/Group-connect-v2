import axios from 'axios'
import baseUrl from './baseUrl'

axios.defaults.validateStatus = function () {
  return true
}



export const getAllGroups = async () => {
  const res = await axios.get(`${baseUrl}/api/v_1/groups`)
  return res
}

export const getSingleGroupInfo = async (id, jwtCookieString) => {
  // jwtCookieString - token from cookie
  let res
  if (!jwtCookieString) {
    res = await axios.get(`${baseUrl}/api/v_1/groups/${id}`)
  } else {
    res = await axios.get(`${baseUrl}/api/v_1/groups/${id}`, { headers: { Cookie: 'jwt=' + jwtCookieString } }, { withCredentials: true })
  }
  
  return res
}

export const createAccount = async (name, email, password, passwordConfirm) => {
  const data = await axios.post('/api/v_1/users/create', { 
    name, email, password, passwordConfirm,
  })
  return data
}

export const loginUser = async (email, password) => {
  const data = await axios.post(`${baseUrl}/api/v_1/users/login`, { 
    email, password,
  }, {
    withCredentials: true,
  })
  return data
}

export const getUserInfo = async () => {
  try {

    const data = await axios.get(`${baseUrl}/api/v_1/users/me`, {
      withCredentials: true,
    })
    // console.log(data)
    return data
  } catch (e) {
    console.log(e.message)
  }
}

export const createGroup = async (name, isPrivate) => {
  const data = await axios.post(`${baseUrl}/api/v_1/groups`, { 
    name, private: isPrivate,
  }, { withCredentials: true })

  return data
}

export const fetchGroupPosts = async groupId => {
  const data = await axios.get(`${baseUrl}/api/v_1/posts/${groupId}`)
  return data
}

//not needed
export const createPost = async (groupId, text) => {
  const data = await axios.post(`${baseUrl}/api/v_1/posts/${groupId}/create`, { text }, { withCredentials: true })
  return data
}

export const getUserGroups = async userId => {
  const res = await axios.get(`${baseUrl}/api/v_1/users/groups-member`, { withCredentials: true })
  // console.log('usergroups', res.data)
  return res.data
}

export const getSinglePost = async (groupId, postId) => {
  const res = await axios.get(`${baseUrl}/api/v_1/posts/${groupId}/${postId}`, { withCredentials: true })
  return res.data
}

export default axios