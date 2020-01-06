import React from 'react'
import {actionCreatorFilter} from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  const filterHandler = event => {
    props.actionCreatorFilter(event.target.value)
  }

  return (
    <div>
      Filter: 
      <input onChange={filterHandler}></input>
    </div>
  )
}

const mapDispatchToProps = {
  actionCreatorFilter
}

export default connect(null, mapDispatchToProps)(Filter)