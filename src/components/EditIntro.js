import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { editIntro } from '../actions'
import {
  SaveButton, CancelButton, Input, Label, Form,
} from '../GlobalStyles'

const EditIntro = ({ intro, setEditMode, dispatchEditIntro }) => {
  const { introImageURL, introDescription } = intro
  const [newImage, setImage] = useState(introImageURL || '')
  const [newDescr, setDescr] = useState(introDescription || '')

  const clickSave = () => {
    dispatchEditIntro({ introImageURL: newImage, introDescription: newDescr })
    setEditMode(false)
  }

  return (
    <Form>
      <Label htmlFor="image">Image URL:</Label>
      <Input name="image" value={newImage} type="text" onChange={e => setImage(e.target.value)} placeholder="Enter Image URL..." />
      <Label htmlFor="descrip">Description:</Label>
      <Input name="descrip" value={newDescr} type="text" onChange={e => setDescr(e.target.value)} placeholder="Enter Description..." />
      <div>
        <SaveButton type="submit" onClick={() => clickSave()}> Save </SaveButton>
        <CancelButton onClick={() => setEditMode(false)}> Cancel </CancelButton>
      </div>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: intro => dispatch(editIntro(intro)),
})

export default connect(null, mapDispatchToProps)(EditIntro)
