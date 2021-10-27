import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import { addPost } from '../actions'
import { SaveButton, CancelButton } from '../StyledComponents/GlobalStyles'

// title, image, description
const PostInput = ({ dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDesription] = useState('')

  return (
    <Form>
      <Input onChange={e => setTitle(e.target.value)} placeholder="Enter title..." />
      <Input onChange={e => setImage(e.target.value)} placeholder="Enter Image URL..." />
      <Input onChange={e => setDesription(e.target.value)} placeholder="Enter Description..." />
      <SaveButton type="submit" onClick={() => dispatchAddPost({ title, image, description })}>
        Save
      </SaveButton>
      <CancelButton>
        Cancel
      </CancelButton>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ title, image, description }) => dispatch(addPost({ title, image, description })),
})

export default connect(null, mapDispatchToProps)(PostInput)

const Input = s.input`
  display: block;
  padding: 10px 24px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  margin: 1rem;
`

// container should have some diff based on if its a reply or new post
const Form = s.div`
  display: flex;
  width: 20%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  border: 1px;
`
