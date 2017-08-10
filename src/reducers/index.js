import Immutable from 'immutable';
import {
  SEND_MESSAGE
  , RECEIVE_MESSAGE
  , SET_USER
} from '../actions'

const initialState = {
  messages: []
  , user: ""
}

let defaultState = Immutable.fromJS(initialState);
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    case RECEIVE_MESSAGE:
      return state.updateIn(['messages'], arr => arr.push(action.message));
    case SET_USER:
      return state.mergeDeep({
        user : action.user
      })
    default:
      return state
  }
}

export default reducer;