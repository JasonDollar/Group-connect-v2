import React, { useReducer, createContext } from 'react'

export const PostContext = createContext()

const types = {
  set: 'SET',
  add: 'ADD',
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case (types.set): 
      return action.payload
    case (types.add): 
      return [...state, action.payload]
    default:
      return state
  }
}

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  const setPosts = posts => dispatch({ type: types.set, payload: posts })

  const addPost = post => dispatch({ type: types.add, payload: post })

  return (
    <PostContext.Provider value={{
      posts: state,
      setPosts,
      addPost,
    }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const PostConsumer = PostContext.Consumer