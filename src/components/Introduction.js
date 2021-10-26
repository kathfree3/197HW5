import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { editIntro } from '../actions'
import EditIntro from './EditIntro'

const Introduction = ({ imageURL, description, dispatchEditIntro }) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      <h1> Hey this is me</h1>
      <p>
        {imageURL}
      </p>
      <p>
        {description}
      </p>
      <button type="button" onClick={() => setEditMode(!editMode)}> Edit </button>
      {editMode && <EditIntro /> }
    </div>
  )
}

const mapStateToProps = state => ({
  imageURL: state.imageURL,
  description: state.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: ({ imageURL, description }) => dispatch(editIntro({ imageURL, description })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Introduction)
