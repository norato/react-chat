import React from 'react';
import { getTime } from '../utils';

export default function Message(props) {
  return (
    <div className={`message ${props.type}`}>
      <p>
        { props.text }
      </p>
      <span>
        {
          getTime(props.time)
        }
      </span>
    </div>
  )
}