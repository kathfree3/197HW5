import { combineReducers } from 'redux'

import intro from './IntroReducer'
import posts from './PostReducer'
import status from './BlogReducer'

export default combineReducers({
  posts,
  status,
  intro,
})
