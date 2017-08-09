import React, { Component } from 'react';

export default class MessageField extends Component {
  render(){
    return (
      <div className="message-field">
        <input
          type="text" placeholder="Type a message"
        />
      </div>
    )
  }
}