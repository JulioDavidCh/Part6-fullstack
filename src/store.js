import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { anecdoteReducer } from './reducers/anecdoteReducer'
import { filterReducer } from './reducers/filterReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const combinedReducers = combineReducers({
  anecdotes: anecdoteReducer,
  filterValue: filterReducer,
  notification: notificationReducer
})

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store