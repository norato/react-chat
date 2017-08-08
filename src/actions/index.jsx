import io from "socket.io-client"

export const CONNECT_TO_SERVER = Symbol('CONNECT_TO_SERVER')
export const SEND_MESSAGE = Symbol('SEND_MESSAGE')
export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE')

export const connect_to_server = () => {
  const SERVER_URL = `http://localhost:3001/`
  let socket = io(SERVER_URL)
  return {
    type: CONNECT_TO_SERVER
    , socket
  }
}

export const send_message = (message) =>{
  return (dispatch, getState) => {
    getState().get('socket').emit('send message', message);
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


  