import noteServices from '../services/anecdotes'

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
      const newStateWithAnecdote = state.concat(action.data)
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

const addAnecdoteAction = data => {
  return {
    type: 'ADD_NOTE',
    data
  }
}

const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await noteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data
    })
  }
}

export { anecdoteReducer, voteAction, addAnecdoteAction, initializeAnecdotes }