import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { Button } from '../GlobalStyles'
import PostForm from './PostForm'
import PostList from './PostList'

const Blog = () => {
  const [toggled, setToggled] = useState(true)
  return (
    <Container>
      <h1>
        Blog Posts
        <AddButton onClick={() => setToggled(!toggled)}> Add Post </AddButton>
      </h1>
      {toggled && (
      <Bordered>
        <h2> New Post </h2>
        <PostForm setToggled={setToggled} />
      </Bordered>
      )}
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
const Bordered = s.div`
  border: 3px solid #f2f2f2;
  width: 30%;
  margin: auto;
  h2 {
    margin: 1rem;
  }
`

const AddButton = s(Button)`
  background: blue;
  margin-left: auto;
`
