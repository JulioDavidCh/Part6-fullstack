const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE' :
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      anecdoteToChange.votes = anecdoteToChange.votes + 1
      const newState = state.map(anecdote =>{
        if(anecdote.id === id){
          return anecdoteToChange
        }
        return anecdote
      })
      return newState
    case 'ADD_NOTE': 
      const newAnecdote = asObject(action.data.content)
      const newStateWithAnecdote = state.concat(newAnecdote)
      return newStateWithAnecdote
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

const addAnecdoteAction = (content) => {
  return {
    type: 'ADD_NOTE',
    data: {
      content
    }
  }
}

const initializeAnecdotes = data => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export { anecdoteReducer, voteAction, addAnecdoteAction, initializeAnecdotes }