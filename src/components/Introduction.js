// package imports
import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import EditIntro from './EditIntro'
import {
  EditButton, Image, SectionWrapper,
} from '../GlobalStyles'

const Introduction = ({ intro }) => {
  const [editMode, setEditMode] = useState(false)
  const { introImageURL, introDescription } = intro // destructure elem

  return (
    <IntroWrapper>
      <h1>
        Welcome to my blog!!
        <EditButton className="edit" onClick={() => setEditMode(!editMode)}> Edit </EditButton>
      </h1>
      {editMode ? (<EditIntro intro={intro} setEditMode={setEditMode} />) : (
        <Content>
          <Image src={introImageURL} alt="profile pic" />
          {introDescription}
        </Content>
      ) }
    </IntroWrapper>
  )
}

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, null)(Introduction)

// styled components
const IntroWrapper = s(SectionWrapper)`
  background: lightgray;
  .edit {
    margin-left: auto;
  }
`
const Content = s.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`
