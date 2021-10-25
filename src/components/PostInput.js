import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { addPost } from '../actions'

// title, image, description
const PostInput = ({ dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDesription] = useState('')

  return (
    <>
      <input onChange={e => setTitle(e.target.value)} />
      <input onChange={e => setImage(e.target.value)} />
      <input onChange={e => setDesription(e.target.value)} />
      <button type="submit" onClick={() => dispatchAddPost({ title, image, description })}> Add Post </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ title, image, description }) => dispatch(addPost({ title, image, description })),
})

export default connect(null, mapDispatchToProps)(PostInput)
