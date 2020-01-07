import React, { useEffect } from 'react'
import AnecdoteForm from './components/forms/AnecdoteForm'
import AnecdoteList from './components/forms/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteServices from './services/anecdotes'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(()=> {
    anecdoteServices.getAll()
    .then(anecdotes => {
      props.initializeAnecdotes(anecdotes)
    })
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