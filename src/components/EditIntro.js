/*
    should include:
    an image + a short description
    user should be able to : modify anything here

    // this state should be stored in redux

*/

import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { editIntro } from '../actions'

const EditIntro = ({ dispatchEditIntro }) => {
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form>
      <input value={imageURL} type="text" onChange={e => setImageURL(e.target.value)} placeholder="Image Url" />
      <input value={description} type="text" onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit" onClick={() => dispatchEditIntro(description)}>
        Submit
      </button>
      <button type="submit"> Cancel </button>
    </form>
  )
}

const mapStateToProps = state => ({
  imageURL: state.imageURL,
  description: state.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: description => dispatch(editIntro({ description })),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditIntro)
