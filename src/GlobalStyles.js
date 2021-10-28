import s from 'styled-components'

export const Button = s.button`
  display: block;
  font-size: 1rem;
  padding: 8px 18px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  color: white;
  margin-top: 0.5rem;
`
export const EditButton = s(Button)`
  background: #DB7093;
`

export const SaveButton = s(Button)`
  background: green;
  display: inline-block;
  margin-right: 1rem;
`
export const CancelButton = s(Button)`
  background: blue;
  display: inline-block;
`

export const Input = s.input`
  display: block;
  padding: 10px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  margin-bottom: 1rem;
`
export const Label = s.label`
  margin: 0.25rem 0rem;
`
export const Form = s.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 1rem;
`
