import React from 'react';
import { getTime } from '../utils';
import Immutable from 'immutable'


export default function Message(props) {
  let message = Immutable.fromJS(props.message)
  return (
    <div className={`message ${message.get('type')}`}>
      <p>
        { message.get('text') }
      </p>
      <span>
        {
          getTime(message.get('time'))
        }
      </span>
    </div>
  )
}