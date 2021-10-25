import React from 'react'
import { connect } from 'react-redux'

const PostList = ({ posts }) => (
  <>
    {posts.map(p => (
      <div>
        {p.title}
        {p.image}
        {p.description}
      </div>
    ))}
  </>
)

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostList)
