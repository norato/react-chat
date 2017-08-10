import React, { Component } from 'react';

export default class MessageField extends Component {
  getValue(){
    return this.refs.message.value;
  }
  clearValue() {
    this.refs.message.value = "";
  }
  render(){
    return (
      <div className="message-field">
        <input
          type="text"
          placeholder="Type a message"
          ref='message'
          onKeyPress={this.props.onKeyPress}
        />
      </div>
    )
  }
}