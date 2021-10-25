// local imports
import { EDIT_INTRO } from '../actions'

const defaultState = { image: '', description: '' }

const intro = (state = defaultState, action) => {
  const { type, imageURL, description } = action

  switch (type) {
    case EDIT_INTRO:
      return { imageURL, description }
    default:
      return state
  }
}

export default intro
