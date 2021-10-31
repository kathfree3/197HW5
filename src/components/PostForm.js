// package imports
import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { addPost, editPost, deletePost } from '../actions'
import {
  Button, SaveButton, CancelButton, Input, Label, Form,
} from '../GlobalStyles'

const PostForm = ({
  setEditMode, data, dispatchAdd, dispatchEdit, dispatchDelete,
}) => {
  // data either exists or doesn't
  const {
    id, title, image, description,
  } = data || 0

  // default values or empty if data didn't exist
  const [newTitle, setTitle] = useState(title || '')
  const [newImage, setImage] = useState(image || '')
  const [newDesc, setDesc] = useState(description || '')

  const clickSave = () => {
    const newData = {
      id, title: newTitle, image: newImage, description: newDesc,
    }
    setEditMode(false)
    // edit or add post depending on which mode we in
    return id ? dispatchEdit(newData) : dispatchAdd(newData)
  }

  const clickDelete = () => {
    // delete post & untoggle if button clicked
    dispatchDelete(id)
    setEditMode(false)
  }

  return (
    <Form>
      <Label htmlFor="title">Title</Label>
      <Input name="title" value={newTitle} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
      <Label htmlFor="image">Image URL</Label>
      <Input name="image" value={newImage} onChange={e => setImage(e.target.value)} placeholder="Enter image url" />
      <Label htmlFor="description">Description</Label>
      <Input name="description" value={newDesc} onChange={e => setDesc(e.target.value)} placeholder="Enter description" />
      <div>
        <SaveButton type="submit" onClick={() => clickSave()}> Save </SaveButton>
        <CancelButton onClick={() => setEditMode(false)}> Cancel </CancelButton>
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

// styled components
const DeleteButton = s(Button)`
  background: #b30000;
`
