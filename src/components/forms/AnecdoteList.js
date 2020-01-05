import React from 'react'
import {voteAction} from '../../reducers/anecdoteReducer'
import {notificationAction} from '../../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const store = props.store
  const {anecdotes, filterValue} = store.getState()
  const filteredAnecdotes = anecdotes.filter(
    anecdote => anecdote.content.indexOf(filterValue) > -1
  )
  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const newDispatchVote = voteAction(id)
    const anecdoteFromId = anecdotes.find(anecdote => id === anecdote.id)
    const newDispatchNotification = notificationAction(`you voted '${anecdoteFromId.content}'`)
    const newDispatchNotificationClear = notificationAction('')
    store.dispatch(newDispatchVote)
    store.dispatch(newDispatchNotification)
    setTimeout(() => store.dispatch(newDispatchNotificationClear), 5000)
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

export default AnecdoteList