import React from 'react'
import {addAnecdoteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteServices from '../../services/anecdotes'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const inputContent = event.target.note.value
    const anecdoteToAdd = await anecdoteServices.addNew(inputContent)
    props.addAnecdoteAction(anecdoteToAdd)
    props.notificationAction(`added ${inputContent}`)
    setTimeout(()=> props.notificationAction(''), 5000)
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