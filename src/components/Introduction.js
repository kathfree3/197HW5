import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import EditIntro from './EditIntro'
import { EditButton } from '../GlobalStyles'

const Introduction = ({ intro }) => {
  const [editMode, setEditMode] = useState(false)
  const { introImageURL, introDescription } = intro
  return (
    <IntroContainer>
      <h1> Hey this is me</h1>
      {!editMode
      && (
      <>
        <p>
          {introImageURL}
        </p>
        <p>
          {introDescription}
        </p>
        <EditButton type="button" onClick={() => setEditMode(!editMode)}>
          Edit
        </EditButton>
      </>
      )}
      {editMode && <EditIntro intro={intro} setEditMode={setEditMode} />}
    </IntroContainer>
  )
}

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, null)(Introduction)

const IntroContainer = s.div`
  margin: 1rem;
  padding: 1rem;
  display: block;
  background: lightgray;
`
