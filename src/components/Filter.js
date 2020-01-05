import React from 'react'
import {actionCreatorFilter} from '../reducers/filterReducer'

const Filter = (props) => {
  const store = props.store

  const filterHandler = event => {
    const valueToFilter = event.target.value
    const newDispatchFilter = actionCreatorFilter(valueToFilter)
    store.dispatch(newDispatchFilter)
  }

  return (
    <div>
      Filter: 
      <input onChange={filterHandler}></input>
    </div>
  )
}

export default Filter