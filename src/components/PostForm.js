import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { addPost, editPost, deletePost } from '../actions'
import {
  Button, SaveButton, CancelButton, Input, Label,
} from '../GlobalStyles'

// title, image, description
const PostForm = ({
  setToggled, id, title, image, description, dispatchEdit, dispatchAdd, dispatchDelete,
}) => {
  const [newTitle, setTitle] = useState(title || '')
  const [newImage, setImage] = useState(image || '')
  const [newDesc, setDesc] = useState(description || '')

  return (
    <Form>
      <Label htmlFor="title">Title:</Label>
      <Input name="title" value={newTitle} onChange={e => setTitle(e.target.value)} placeholder="Enter title..." />
      <Label htmlFor="image">Image URL:</Label>
      <Input name="image" value={newImage} onChange={e => setImage(e.target.value)} placeholder="Enter Image URL..." />
      <Label htmlFor="description">Description:</Label>
      <Input name="description" value={newDesc} onChange={e => setDesc(e.target.value)} placeholder="Enter Description..." />
      <div>
        <SaveButton
          type="submit"
          onClick={() => {
            if (id) {
              dispatchEdit({
                id, title: newTitle, image: newImage, description: newDesc,
              })
            } else {
              dispatchAdd({ title: newTitle, image: newImage, description: newDesc })
            }
            setToggled(false)
          }}
        >
          Save
        </SaveButton>
        <CancelButton onClick={() => setToggled(false)}>
          Cancel
        </CancelButton>
        {id && (
        <DeleteButton onClick={() => {
          dispatchDelete(id)
          setToggled(false)
        }}
        >
          Delete
        </DeleteButton>
        ) }
      </div>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAdd: ({ title, image, description }) => dispatch(addPost({ title, image, description })),
  dispatchEdit: ({
    id, title, image, description,
  }) => dispatch(editPost({
    id, title, image, description,
  })),
  dispatchDelete: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostForm)

const Form = s.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 1rem;
`

const DeleteButton = s(Button)`
  background: red;
`
