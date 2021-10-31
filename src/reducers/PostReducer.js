// local imports
import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const defaultState = []

const PostReducer = (state = defaultState, action) => {
  const {
    type, id, title, image, description,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, image, description,
      }]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, title, image, description,
          }
        }
        return post
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default PostReducer
