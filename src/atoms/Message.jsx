import React from 'react';
import { getTime } from '../utils';

export default function Message(props) {
  return (
    <div className={`message ${props.message.get('type')}`}>
      <p>
        { props.message.get('text') }
      </p>
      <span>
        {
          getTime(props.message.get('time'))
        }
      </span>
    </div>
  )
}