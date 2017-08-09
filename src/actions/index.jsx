export const SEND_MESSAGE = Symbol('SEND_MESSAGE')
export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE')

export const send_message = (data) =>{
  return (dispatch, getState) => {
    let message = {messages: data.message}
    data.socket.emit('send message', message);
    dispatch({
      type: SEND_MESSAGE
      , message
    })
  }
}

export const receive_message = (_message) =>{
  return (dispatch, getState) => {
    let message = _message.msg 
    dispatch({
      type: RECEIVE_MESSAGE
      , message
    })
  }
}


  