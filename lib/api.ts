import axios, { AxiosResponse } from 'axios'
import cookies from 'next-cookies'

const host = process.env.PROD_URL || 'http://localhost:3000'

export const getAllGroups = async () => {
  const res = await axios.get(`${host}/api/groups`)
  return res
}

export const getSingleGroupInfo = async (id: string | string[], jwtCookieString: string | undefined) => {
  const res = await axios.get(`${host}/api/groups/${id}`, { headers: { Cookie: 'jwt=' + jwtCookieString } })
  console.log(res.data)
  return res
}

export const createAccount = async (name: string, email: string, password: string, passwordConfirm: string) => {
  const data = await axios.post('/api/users/create', { 
    name, email, password, passwordConfirm,
  })
  return data
}

export const loginUser = async (email: string, password: string) => {
  const data = await axios.post(`${host}/api/users/login`, { 
    email, password,
  }, {
    withCredentials: true,
  })
  return data
}

export const createGroup = async (name:string, isPrivate: boolean) => {
  const data = await axios.post(`${host}/api/groups`, { 
    name, private: isPrivate,
  }, { withCredentials: true })
  console.log(data)
  return data
}

export const fetchGroupPosts = async (groupId:string | string[]) => {
  const data = await axios.get(`${host}/api/posts/${groupId}`)
  return data
}

export const createPost = async (groupId:string | string[], text:string) => {
  const data = await axios.post(`${host}/api/posts/${groupId}/create`, { text }, { withCredentials: true })
  return data
}