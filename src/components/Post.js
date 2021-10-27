// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import { editPost } from '../actions'

// local stle imports
import {
  Button, EditButton, SaveButton, CancelButton,
} from '../StyledComponents/GlobalStyles'

const PostContainer = s.div`
  margin: 1rem;
  padding: 1rem;
  display: block;
  width: 25%;
  border: 5px solid #f2f2f2;
  border-radius: 3px;
  h1 {
    font-size: 1.5rem
  }
`
const DeleteButton = s(Button)`
  background: red;
`

const Post = ({
  id, title, image, description,
}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <PostContainer>
      <h1>
        Post #
        {id}
        :
        {title}
      </h1>
      {image}
      {description}
      <EditButton type="button" onClick={() => setEditMode(!editMode)}>
        Edit
      </EditButton>
      {editMode && (
      <>
        <SaveButton />
        <CancelButton />
        <DeleteButton />
      </>
      )}
    </PostContainer>
  )
}

export default Post
