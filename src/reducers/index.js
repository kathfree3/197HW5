// package imports
import { combineReducers } from 'redux'

// local imports
import intro from './IntroReducer'
import posts from './PostReducer'

export default combineReducers({
  posts,
  intro,
})
