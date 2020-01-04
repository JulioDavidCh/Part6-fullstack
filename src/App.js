import React from 'react';
import {voteAction} from './reducers/anecdoteReducer'
import AnecdoteForm from './components/forms/AnecdoteForm'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const newDispatch = voteAction(id)
    store.dispatch(newDispatch)
  }

  return (
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
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App