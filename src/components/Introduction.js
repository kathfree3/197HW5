import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import { editIntro } from '../actions'

const Introduction = ({ imageURL, description, dispatchEditIntro }) => {
  const [toggled, setToggled] = useState(false)
  const [newImageURL, setNewImageURL] = useState(imageURL)
  const [newDescription, setNewDescription] = useState(description)

  return (
    <div>
      <h1> Hey this is me</h1>
      <p>
        {imageURL}
      </p>
      <p>
        {description}
      </p>
      <button type="button" onClick={() => setToggled(!toggled)}> Edit </button>
      {toggled && (
        <form>
          <input value={newImageURL} type="text" onChange={e => setNewImageURL(e.target.value)} placeholder="Image Url" />
          <input value={newDescription} type="text" onChange={e => setNewDescription(e.target.value)} placeholder="Description" />
          <button type="submit" onClick={() => dispatchEditIntro({ imageURL: newImageURL, description: newDescription })}> Submit </button>
          <button type="submit"> Cancel </button>
        </form>
      )}
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
