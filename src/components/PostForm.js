import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { addPost, editPost, deletePost } from '../actions'
import {
  Button, SaveButton, CancelButton, Input, Label, Form,
} from '../GlobalStyles'

// title, image, description
const PostForm = ({
  setToggled, data, dispatchAdd, dispatchEdit, dispatchDelete,
}) => {
  const {
    id, title, image, description,
  } = data || 0
  const [newTitle, setTitle] = useState(title || '')
  const [newImage, setImage] = useState(image || '')
  const [newDesc, setDesc] = useState(description || '')

  const clickSave = () => {
    const newData = {
      id, title: newTitle, image: newImage, description: newDesc,
    }
    if (id) {
      dispatchEdit(newData)
    } else { // if id is 0, make the new post
      dispatchAdd(newData)
    }
    setToggled(false)
  }

  const clickDelete = () => {
    dispatchDelete(id)
    setToggled(false)
  }
  return (
    <Form>
      <Label htmlFor="title">Title:</Label>
      <Input name="title" value={newTitle} onChange={e => setTitle(e.target.value)} placeholder="Enter title..." />
      <Label htmlFor="image">Image URL:</Label>
      <Input name="image" value={newImage} onChange={e => setImage(e.target.value)} placeholder="Enter Image URL..." />
      <Label htmlFor="description">Description:</Label>
      <Input name="description" value={newDesc} onChange={e => setDesc(e.target.value)} placeholder="Enter Description..." />
      <div>
        <SaveButton type="submit" onClick={() => clickSave()}> Save </SaveButton>
        <CancelButton onClick={() => setToggled(false)}> Cancel </CancelButton>
        {id && <DeleteButton onClick={() => clickDelete()}> Delete </DeleteButton>}
      </div>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAdd: data => dispatch(addPost(data)),
  dispatchEdit: data => dispatch(editPost(data)),
  dispatchDelete: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostForm)

const DeleteButton = s(Button)`
  background: red;
`
