// local imports
import { EDIT_INTRO } from '../actions'

const default_state = { introImageURL: '', introDescription: '' }

const IntroReducer = (state = default_state, action) => {
  const { type, intro } = action

  switch (type) {
    case EDIT_INTRO:
      return intro
    default:
      return state
  }
}

export default IntroReducer
