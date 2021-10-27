import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { Button } from '../StyledComponents/GlobalStyles'
import PostInput from './PostInput'
import PostList from './PostList'
import { setToggle, TOGGLE_STATUS } from '../actions'

// const key = obj.key (x)
const { CREATE_TRUE } = TOGGLE_STATUS

const Blog = ({ status, dispatchSetToggle }) => (
  <Container>
    <h1>
      Blog Posts
      <AddPostButton type="button" onClick={() => dispatchSetToggle(status)}>
        Add Post
      </AddPostButton>
    </h1>
    {status === CREATE_TRUE && <PostInput />}
    <PostList />
  </Container>

)

const mapStateToProps = state => ({
  status: state.status,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetToggle: status => dispatch(setToggle(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog)

const Container = s.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
  
`

const AddPostButton = s(Button)`
  background: blue;
  margin-left: auto;
`
