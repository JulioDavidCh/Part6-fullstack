import React from 'react'
import {addAnecdoteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const inputContent = event.target.note.value
    props.addAnecdoteAction(inputContent)
    props.notificationAction(`added ${inputContent}`, 5)
  }
  
  return (
    <form onSubmit={addAnecdote}>
      <div><input name='note' /></div>
      <button>create</button>
    </form>
  )
}

const mapDispatchToProps = {
  addAnecdoteAction,
  notificationAction
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)