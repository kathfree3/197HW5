import { ADD_POST } from '../actions'

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
    default:
      return state
  }
}

export default PostReducer
