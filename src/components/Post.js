// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import PostForm from './PostForm'
import { EditButton } from '../GlobalStyles'

const Post = ({
  id, title, image, description,
}) => {
  const [editMode, setEditMode] = useState(false)
  const data = {
    id, title, image, description,
  }
  return (
    <PostContainer>
      {!editMode ? (
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
          <EditButton type="button" onClick={() => setEditMode(!editMode)}> Edit </EditButton>
        </>
      ) : (<PostForm setToggled={setEditMode} data={data} />)}
    </PostContainer>
  )
}

export default Post

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
