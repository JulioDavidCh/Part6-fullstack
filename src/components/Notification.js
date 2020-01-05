import React from 'react'

const Notification = (props) => {
  const store = props.store
  const notificationMessage = store.getState().notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notificationMessage}
    </div>
  )
}

export default Notification