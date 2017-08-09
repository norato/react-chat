import React from 'react';
import Message from '../atoms/Message'

export default function MessageList(props) {
  return (
    <div className='message-list'>
      {
        props.Messages &&
          props.Messages.entrySeq().map((entry) => {
            let index = entry[0]
            let message = entry[1]
            return (
              <Message
                key={index}
                message={message}
              />
            )
          })
      }
    </div>
  )
}