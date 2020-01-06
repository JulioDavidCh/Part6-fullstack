import React from 'react'
import AnecdoteForm from './components/forms/AnecdoteForm'
import AnecdoteList from './components/forms/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App