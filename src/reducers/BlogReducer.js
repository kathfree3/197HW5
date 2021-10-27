// local imports
import { SET_TOGGLE, TOGGLE_STATUS } from '../actions'

const { CREATE_TRUE, CREATE_FALSE } = TOGGLE_STATUS

const defaultState = CREATE_TRUE // cahnge to true for real functionality

const BlogReducer = (state = defaultState, action) => {
  const { type, status } = action

  switch (type) {
    case SET_TOGGLE:
      switch (status) {
        case CREATE_TRUE:
          return CREATE_FALSE
        case CREATE_FALSE:
          return CREATE_TRUE
        default:
          return status
      }
    default:
      return state
  }
}

export default BlogReducer
