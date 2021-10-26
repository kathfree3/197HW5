import React, { useState } from 'react'
import { connect } from 'react-redux'

// local imports
import Post from '../StyledComponents/Post'

const PostList = ({ posts, dispatchEditPost }) => (
  <>
    {posts.map(({
      id, title, image, description,
    }) => (
      <Post id={id} title={title} image={image} description={description} />
    ))}
  </>
)

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostList)
