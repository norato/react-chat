import React, { Component } from 'react';

export default class MessageField extends Component {
  getvalue(){
    return this.refs.message.value
  }
  render(){
    return (
      <div className="message-field">
        <input
          type="text"
          placeholder="Type a message"
          ref='message'
        />
      </div>
    )
  }
}