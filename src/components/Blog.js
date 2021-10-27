import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { Button } from '../StyledComponents/GlobalStyles'
import PostInput from './PostInput'
import PostList from './PostList'

const Blog = () => {
  const [addPostMode, setAddPostMode] = useState(true)
  return (
    <Container>
      <h1>
        Blog Posts
        <AddPostButton type="button" onClick={() => setAddPostMode(!addPostMode)}>
          Add Post
        </AddPostButton>
      </h1>
      {addPostMode && <PostInput />}
      <PostList />
    </Container>

  )
}

export default Blog

const Container = s.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
  
`

const AddPostButton = s(Button)`
  background: blue;
  margin-left: auto;
`
