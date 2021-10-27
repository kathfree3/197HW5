import React, { useState } from 'react'
import { connect } from 'react-redux'
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
        <AddPostButton type="button" onClick={() => setToggled(!toggled)}>
          Add Post
        </AddPostButton>
      </h1>
      {toggled
      && (
      <div style={{ border: '3px solid #f2f2f2', width: '30%', margin: 'auto' }}>
        <PostForm setToggled={setToggled} />
      </div>
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

const AddPostButton = s(Button)`
  background: blue;
  margin-left: auto;
`
