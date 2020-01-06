const initialState = ''

const actionCreatorFilter = (filterVal) => {
  return {
    type: 'SET_FILTER',
    filterVal
  }
}

const filterReducer = (state=initialState, action) => {
  switch (action.type){
    case 'SET_FILTER' :
      return action.filterVal
    default :
    return state
  }
}

export { filterReducer, actionCreatorFilter }