let counter = 0

export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'

export const addPost = ({ title, image, description }) => ({
  type: ADD_POST,
  id: counter++,
  title,
  image,
  description,
})

export const editIntro = ({ imageURL, description }) => ({
  type: EDIT_INTRO,
  imageURL,
  description,
})
