import React from 'react'
import {addAnecdoteAction} from '../../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const store = props.store

  const addAnecdote = (event) => {
    event.preventDefault()
    const inputContent = event.target.note.value
    const newDispatch = addAnecdoteAction(inputContent)
    store.dispatch(newDispatch)
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='note' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm