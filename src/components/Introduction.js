import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { editIntro } from '../actions'
import EditIntro from './EditIntro'
// styles imports
import { EditButton } from '../StyledComponents/GlobalStyles'

const Introduction = ({ imageURL, description, dispatchEditIntro }) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <IntroContainer>
      <h1> Hey this is me</h1>
      <p>
        {imageURL}
      </p>
      <p>
        {description}
      </p>
      <EditButton type="button" onClick={() => setEditMode(!editMode)}>
        Edit
      </EditButton>
      {editMode && <EditIntro /> }
    </IntroContainer>
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

const IntroContainer = s.div`
  margin: 1rem;
  padding: 1rem;
  display: block;
  background: lightgray;
`
