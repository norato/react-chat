import Immutable from 'immutable';
import {
  SEND_MESSAGE
  , RECEIVE_MESSAGE
} from '../actions'

const initialState = {
  messages: []
}

let defaultState = Immutable.fromJS(initialState);
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    case RECEIVE_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    default:
      return state
  }
}

export default reducer;