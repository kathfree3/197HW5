import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { editIntro } from '../actions'
import {
  SaveButton, CancelButton, Input, Label,
} from '../StyledComponents/GlobalStyles'

const EditIntro = ({ intro, setEditMode, dispatchEditIntro }) => {
  const { introImageURL, introDescription } = intro
  const [imageURL, setImageURL] = useState(introImageURL || '')
  const [description, setDescription] = useState(introDescription || '')

  return (
    <>
      <form>
        <Input value={imageURL} type="text" onChange={e => setImageURL(e.target.value)} placeholder="Image Url" />
        <Input value={description} type="text" onChange={e => setDescription(e.target.value)} placeholder="Description" />
      </form>
      <SaveButton
        onClick={() => {
          dispatchEditIntro({ introImageURL: imageURL, introDescription: description })
          setEditMode(false)
        }}
      >
        Save
      </SaveButton>
      <CancelButton onClick={() => setEditMode(false)}> Cancel </CancelButton>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: intro => dispatch(editIntro(intro)),
})

export default connect(null, mapDispatchToProps)(EditIntro)
