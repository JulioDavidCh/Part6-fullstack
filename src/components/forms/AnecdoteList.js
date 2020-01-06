import React from 'react'
import {voteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  const vote = (id) => {
    const anecdoteFromId = props.filteredAnecdotes.find(anecdote => id === anecdote.id)
    props.voteAction(id)
    props.notificationAction(`you voted '${anecdoteFromId.content}'`)
    setTimeout(() => props.notificationAction(`you voted '${anecdoteFromId.content}'`), 5000)
  }

  return(
    <div>
    <h2>Anecdotes</h2>
      {props.filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    <h2>create new</h2>
    </div>
  )
}

const filteredAnecdotes = ({ anecdotes, filterValue }) =>{
  return(
    anecdotes
    .filter(anecdote => anecdote.content.indexOf(filterValue) > -1)
    .sort((a, b) => b.votes - a.votes)
  )
}

const mapStateProps = (state) => {
  return {
    filteredAnecdotes: filteredAnecdotes(state)
  }
}

const mapDispatchToProps = {
  voteAction,
  notificationAction
}

export default connect(mapStateProps, mapDispatchToProps)(AnecdoteList)