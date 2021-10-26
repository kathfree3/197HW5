let counter = 0 // counter for post IDS

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_INTRO = 'EDIT_INTRO'

export const addPost = ({ title, image, description }) => ({
  type: ADD_POST,
  id: counter++,
  title,
  image,
  description,
})

export const editPost = ({
  id, title, image, description,
}) => ({
  type: EDIT_POST,
  id,
  title,
  image,
  description,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const editIntro = ({ imageURL, description }) => ({
  type: EDIT_INTRO,
  imageURL,
  description,
})
