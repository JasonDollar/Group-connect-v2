import axios from 'axios'

const host = process.env.PROD_URL || 'http://localhost:3000'

export const getAllGroups = async () => {
  const res = await axios.get(`${host}/api/groups`)
  return res
}

export const getSingleGroupInfo = async (id, jwtCookieString) => {
  const res = await axios.get(`${host}/api/groups/${id}`, { headers: { Cookie: 'jwt=' + jwtCookieString } })
  return res
}

export const createAccount = async (name, email, password, passwordConfirm) => {
  const data = await axios.post('/api/users/create', { 
    name, email, password, passwordConfirm,
  })
  return data
}

export const loginUser = async (email, password) => {
  const data = await axios.post(`${host}/api/users/login`, { 
    email, password,
  }, {
    withCredentials: true,
  })
  return data
}

export const createGroup = async (name, isPrivate) => {
  const data = await axios.post(`${host}/api/groups`, { 
    name, private: isPrivate,
  }, { withCredentials: true })

  return data
}

export const fetchGroupPosts = async groupId => {
  const data = await axios.get(`${host}/api/posts/${groupId}`)
  return data
}

export const createPost = async (groupId, text) => {
  const data = await axios.post(`${host}/api/posts/${groupId}/create`, { text }, { withCredentials: true })
  return data
}