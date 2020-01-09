const initialState = ''

const notificationAction = (notification, time) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(
      ()=> dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })
    , time*1000)
  }
}

const notificationReducer = (state=initialState, action) => {
  switch (action.type){
    case 'SET_NOTIFICATION' :
      return action.notification
    default :
    return state
  }
}

export {notificationAction, notificationReducer}