import noteServices from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE' :
      return state.map(anecdote =>{
        return(
          anecdote.id === action.data.id
          ? action.data
          : anecdote
        )
      })
    case 'ADD_NOTE': 
      const newStateWithAnecdote = state.concat(action.data)
      return newStateWithAnecdote
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

const voteAction = (anecdote) => {
  return async dispatch =>{
    const data = await noteServices.updateVote(anecdote)
    dispatch({
      type: 'VOTE',
      data
    })
  }
}

const addAnecdoteAction = content => {
  return async dispatch => {
    const data = await noteServices.addNew(content)
    dispatch({
      type: 'ADD_NOTE',
      data
    })
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