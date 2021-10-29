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
  background: #d14775;
`

export const SaveButton = s(Button)`
  background: #00cc66;
  display: inline-block;
  margin-right: 1rem;
`
export const CancelButton = s(Button)`
  background: #0000cc;
  display: inline-block;
`

export const Input = s.input`
  display: block;
  padding: 10px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 1rem;
`
export const Label = s.label`
  margin: 0.25rem 0rem;
`
export const Form = s.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`

export const H = s.h1`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`
export const Image = s.img`
  max-width: 400px;
`
