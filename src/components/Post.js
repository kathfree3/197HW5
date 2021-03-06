// package imports
import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import PostForm from './PostForm'
import { EditButton, Image } from '../GlobalStyles'

const Post = ({
  id, title, image, description,
}) => {
  // store edit mode with useState
  const [editMode, setEditMode] = useState(false)

  return (
    <PostWrapper>
      {editMode ? (
        <PostForm
          setEditMode={setEditMode}
          data={{
            id, title, image, description,
          }}
        />
      ) : (
        <>
          <Image src={image} alt="post image" />
          <h1>
            {`Post #${id}: ${title}`}
          </h1>
          {description}
          <EditButton className="edit" onClick={() => setEditMode(!editMode)}> Edit </EditButton>
        </>
      )}
    </PostWrapper>
  )
}

export default Post

// styled components
const PostWrapper = s.div`
  margin: 1rem 0rem;  
  margin-right: 1rem;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
  width: 25%;
  border: 5px solid #f2f2f2;
  border-radius: 3px;
  h1 {
    font-size: 1.5rem
  }
  .edit {
    margin-right: auto;
  }
`
