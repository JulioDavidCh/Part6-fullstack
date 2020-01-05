import React from 'react'
import {addAnecdoteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const store = props.store

  const addAnecdote = (event) => {
    event.preventDefault()
    const inputContent = event.target.note.value
    const newAnecdoteDispatch = addAnecdoteAction(inputContent)
    const newNotificationDispatch = notificationAction(`added ${inputContent}`)
    store.dispatch(newAnecdoteDispatch)
    store.dispatch(newNotificationDispatch)
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='note' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm