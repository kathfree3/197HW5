import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import EditIntro from './EditIntro'
import { EditButton, H, Image } from '../GlobalStyles'

const Introduction = ({ intro }) => {
  const [editMode, setEditMode] = useState(true)
  const { introImageURL, introDescription } = intro
  return (
    <IntroContainer>
      <H>
        Hey this is me
        <EditButton className="edit" type="button" onClick={() => setEditMode(!editMode)}> Edit </EditButton>
      </H>
      {!editMode ? (
        <Content>
          <Image src={introImageURL} alt="profilepic" />
          {introDescription}
        </Content>
      ) : (<EditIntro intro={intro} setEditMode={setEditMode} />)}
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
  background: lightgray;
  display: flex;
  flex-direction: column;
  .edit {
    margin-left: auto;
  }
`
const Content = s.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`
