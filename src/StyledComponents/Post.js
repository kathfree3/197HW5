// package imports
import React, { useState } from 'react'

// local imports
import { editPost } from '../actions'

const Post = ({
  id, title, image, description,
}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      {id}
      {title}
      {image}
      {description}
      <button type="button" onClick={() => setEditMode(!editMode)}> Edit </button>
      {editMode && (<p> hi </p>)}
    </div>
  )
}

export default Post
