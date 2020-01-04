import React from 'react'
import {voteAction} from '../../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const store = props.store
  const anecdotes = store.getState()
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const newDispatch = voteAction(id)
    store.dispatch(newDispatch)
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