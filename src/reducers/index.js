import { combineReducers } from 'redux'

import intro from './IntroReducer'
import posts from './PostReducer'

export default combineReducers({
  posts,
  intro,
})
