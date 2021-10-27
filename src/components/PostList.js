import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

// local imports
import Post from './Post'

const PostList = ({ posts, dispatchEditPost }) => (
  <Container>
    {posts.map(({
      id, title, image, description,
    }) => (
      <Post id={id} title={title} image={image} description={description} key={id} />
    ))}
  </Container>
)

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostList)

const Container = s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`
