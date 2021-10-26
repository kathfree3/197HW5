import { combineReducers } from 'redux'

// import { imageURL, description } from './IntroReducer'
import posts from './PostReducer'

export default combineReducers({
  posts,
})
