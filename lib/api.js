import axios from 'axios'

axios.defaults.validateStatus = function () {
  return true
}

const host = process.env.PROD_URL || 'http://localhost:3000'

export const getAllGroups = async () => {
  const res = await axios.get(`${host}/api/v_1/groups`)
  return res
}

export const getSingleGroupInfo = async (id, jwtCookieString) => {
  const res = await axios.get(`${host}/api/v_1/groups/${id}`, { headers: { Cookie: 'jwt=' + jwtCookieString } })
  // console.log(res)
  return res
}

export const createAccount = async (name, email, password, passwordConfirm) => {
  const data = await axios.post('/api/v_1/users/create', { 
    name, email, password, passwordConfirm,
  })
  return data
}

export const loginUser = async (email, password) => {
  const data = await axios.post(`${host}/api/v_1/users/login`, { 
    email, password,
  }, {
    withCredentials: true,
  })
  return data
}

export const getUserInfo = async () => {
  try {

    const data = await axios.get(`${host}/api/v_1/users/me`, {
      withCredentials: true,
    })
    // console.log(data)
    return data
  } catch (e) {
    console.log(e.message)
  }
}

export const createGroup = async (name, isPrivate) => {
  const data = await axios.post(`${host}/api/v_1/groups`, { 
    name, private: isPrivate,
  }, { withCredentials: true })

  return data
}

export const fetchGroupPosts = async groupId => {
  const data = await axios.get(`${host}/api/v_1/posts/${groupId}`)
  return data
}

export const createPost = async (groupId, text) => {
  const data = await axios.post(`${host}/api/v_1/posts/${groupId}/create`, { text }, { withCredentials: true })
  return data
}