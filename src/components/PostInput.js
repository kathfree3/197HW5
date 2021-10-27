import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { addPost } from '../actions'
import {
  SaveButton, CancelButton, Input, Label,
} from '../StyledComponents/GlobalStyles'

// title, image, description
const PostInput = ({ setToggled, dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDesription] = useState('')

  return (
    <Form>
      <h2> New Post </h2>
      <Label htmlFor="title">Title:</Label>
      <Input name="title" onChange={e => setTitle(e.target.value)} placeholder="Enter title..." />
      <Label htmlFor="image">Image URL:</Label>
      <Input name="image" onChange={e => setImage(e.target.value)} placeholder="Enter Image URL..." />
      <Label htmlFor="description">Description:</Label>
      <Input name="description" onChange={e => setDesription(e.target.value)} placeholder="Enter Description..." />
      <div>
        <SaveButton
          type="submit"
          onClick={() => {
            dispatchAddPost({ title, image, description })
            setToggled(false)
          }}
        >
          Save
        </SaveButton>
        <CancelButton onClick={() => setToggled(false)}>
          Cancel
        </CancelButton>
      </div>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ title, image, description }) => dispatch(addPost({ title, image, description })),
})

export default connect(null, mapDispatchToProps)(PostInput)

const Form = s.div`
  display: flex;
  width: 20%;
  margin: auto;
  flex-direction: column;
  border: 3px solid #f2f2f2;
  padding: 1rem;
`
