// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import PostForm from './PostForm'
import { EditButton } from '../GlobalStyles'

const PostContainer = s.div`
  margin: 1rem 0rem;  
  margin-right: 1rem;
  padding: 1rem;
  display: block;
  width: 25%;
  border: 5px solid #f2f2f2;
  border-radius: 3px;
  h1 {
    font-size: 1.5rem
  }
`

const Post = ({
  id, title, image, description,
}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <PostContainer>
      {!editMode && (
        <>
          <h1>
            Post #
            {id}
            :
            {title}
          </h1>
          {image}
          <br />
          {description}
          <EditButton type="button" onClick={() => setEditMode(!editMode)}>
            Edit
          </EditButton>
        </>
      )}
      {editMode && <PostForm setToggled={setEditMode} id={id} title={title} image={image} description={description} /> }
    </PostContainer>
  )
}

export default Post
