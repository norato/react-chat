export const SEND_MESSAGE = Symbol('SEND_MESSAGE')
export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE')

export const send_message = (data) =>{
  return (dispatch, getState) => {
    let message = data.message
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
    dispatch({
      type: RECEIVE_MESSAGE
      , message
    })
  }
}


  