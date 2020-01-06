import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notificationMessage = props.notification

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)