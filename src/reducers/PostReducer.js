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
      return state
    case DELETE_POST:
      return state
    default:
      return state
  }
}

export default PostReducer
