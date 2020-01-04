import React from 'react';
import {voteAction, addAnecdoteAction} from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const newDispatch = voteAction(id)
    store.dispatch(newDispatch)
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const inputContent = event.target.note.value
    const newDispatch = addAnecdoteAction(inputContent)
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
      <form onSubmit={addAnecdote}>
        <div><input name='note' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App