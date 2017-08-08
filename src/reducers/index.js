import Immutable from 'immutable';
import {
  CONNECT_TO_SERVER
  , SEND_MESSAGE
  , RECEIVE_MESSAGE
} from '../actions'

const initialState = {
  messages: []
  , socket : ""
}

let defaultState = Immutable.fromJS(initialState);
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case CONNECT_TO_SERVER:
      return state.mergeDeep({
        socket: action.socket
      })
    case SEND_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    case RECEIVE_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    default:
      return state
  }
}

export default reducer;