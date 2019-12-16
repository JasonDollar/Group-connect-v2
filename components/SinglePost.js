import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem 0;
  border: 1px solid red;
  padding: .5rem;
  display: flex;
  flex-direction: column;
`
const PostContent = styled.h3`
  margin: .5rem 0;
`

const PostInfo = styled.div`
  display: flex;
  font-size: 1.2rem;
  span {
    margin-right: 1rem;
  }
`

const SinglePost = ({ post }) => (
  <Container>
    <PostContent>{post.text}</PostContent>
    <PostInfo>
      <span>Created by: {post.createdBy.name}</span>
      
      <span>{post.createdAt}</span>
      <span>Comments: {post.commentsLength}</span>
    </PostInfo>
  </Container>
)

export default SinglePost
 