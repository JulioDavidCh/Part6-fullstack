import React, { useEffect } from 'react'
import AnecdoteForm from './components/forms/AnecdoteForm'
import AnecdoteList from './components/forms/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(()=> {
    props.initializeAnecdotes()
  },[])

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)