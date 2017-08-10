export const SEND_MESSAGE = Symbol('SEND_MESSAGE')
export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE')
export const SET_USER = Symbol('SET_USER')

export const send_message = (data) =>{
  return (dispatch, getState) => {
    let user = getState().get('user')
    let message = {
      text: data.message
      , time: `${Date()}`
      , user: user
      , type: 'sent' 
    }
    data.socket.emit('send message', message);
    dispatch({
      type: SEND_MESSAGE
      , message
    })
  }
}

export const receive_message = (data) =>{
  return (dispatch, getState) => {
    let message = data.message
    let user = getState().get('user')
    if (user !== message.user) {
      message.type = 'received'
      dispatch({
        type: RECEIVE_MESSAGE
        , message
      })
    }
  }
}

export const set_user = (user) =>{
  return (dispatch, getState) => {
    dispatch({
      type: SET_USER
      , user
    })
  }
}


  