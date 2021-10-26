import React, { useState } from 'react'

// local imports
const EditIntro = ({ dispatchEditIntro }) => {
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form>
      <input value={imageURL} type="text" onChange={e => setImageURL(e.target.value)} placeholder="Image Url" />
      <input value={description} type="text" onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit" onClick={() => dispatchEditIntro({ imageURL, description })}>
        Submit
      </button>
      <button type="submit"> Cancel </button>
    </form>
  )
}

export default EditIntro
