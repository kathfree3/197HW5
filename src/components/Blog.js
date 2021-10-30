import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { Button, H } from '../GlobalStyles'
import PostForm from './PostForm'
import PostList from './PostList'

const Blog = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <BlogWrapper>
      <H>
        Blog Posts
        <AddButton onClick={() => setToggled(!toggled)}> Add Post </AddButton>
      </H>
      {toggled && (
      <NewPost>
        <h2> New Post </h2>
        <PostForm setToggled={setToggled} />
      </NewPost>
      )}
      <PostList />
    </BlogWrapper>
  )
}

export default Blog

const BlogWrapper = s.div`
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

const NewPost = s.div`
  border: 3px solid #f2f2f2;
  width: 30%;
  margin: auto;
  h2 {
    margin: 1rem;
  }
`

const AddButton = s(Button)`
  background: #66b3ff;
  margin-left: auto;
`
