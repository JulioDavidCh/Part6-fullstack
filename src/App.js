import React from 'react'
import AnecdoteForm from './components/forms/AnecdoteForm'
import AnecdoteList from './components/forms/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  const store = props.store

  return (
    <div>
      <Notification store={store} />
      <Filter store={store} />
      <AnecdoteList store={store} />
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App