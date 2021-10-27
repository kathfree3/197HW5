import s from 'styled-components'

export const Button = s.button`
  display: block;
  font-size: 1rem;
  padding: 8px 18px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  color: white;
  margin: 1rem;
`
export const EditButton = s(Button)`
  background: #DB7093;
`

export const SaveButton = s(Button)`
  background: green;
  display: inline-block;
`
export const CancelButton = s(Button)`
  background: blue;
  display: inline-block;
`
