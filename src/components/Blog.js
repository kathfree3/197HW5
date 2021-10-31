// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { Button, SectionWrapper } from '../GlobalStyles'
import PostForm from './PostForm'
import PostList from './PostList'

const Blog = () => {
  const [editMode, setEditMode] = useState(false)
  return (
    <SectionWrapper>
      <h1>
        My Posts
        <AddButton onClick={() => setEditMode(!editMode)}> Add Post </AddButton>
      </h1>
      {editMode && (
      <NewPost>
        <h2> New Post </h2>
        <PostForm setEditMode={setEditMode} />
      </NewPost>
      )}
      <PostList />
    </SectionWrapper>
  )
}

export default Blog

// styled components
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
