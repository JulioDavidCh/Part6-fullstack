import React from 'react'

const Notification = (props) => {
  const store = props.store
  const notificationMessage = store.getState().notification

  const defaultStyle = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const style = notificationMessage === '' ?
  {} :
  defaultStyle

  return (
    <div style={style}>
      {notificationMessage}
    </div>
  )
}

export default Notification