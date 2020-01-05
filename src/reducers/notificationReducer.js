const initialState = ''

const notificationAction = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
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