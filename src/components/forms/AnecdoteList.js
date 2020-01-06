import React from 'react'
import {voteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  const filteredAnecdotes = props.anecdotes.filter(
    anecdote => anecdote.content.indexOf(props.filterValue) > -1
  )
  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const anecdoteFromId = props.anecdotes.find(anecdote => id === anecdote.id)
    props.voteAction(id)
    props.notificationAction(`you voted '${anecdoteFromId.content}'`)
    setTimeout(() => props.notificationAction(`you voted '${anecdoteFromId.content}'`), 5000)
  }

  return(
    <div>
    <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
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

const mapStateProps = (state) => {
  return {
    anecdotes: state.anecdotes, 
    filterValue: state.filterValue
  }
}

const mapDispatchToProps = {
  voteAction,
  notificationAction
}

export default connect(mapStateProps, mapDispatchToProps)(AnecdoteList)