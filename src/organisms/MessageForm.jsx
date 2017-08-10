import React, { Component } from 'react';
import MessageField from '../atoms/MessageField';
import ButtonSubmit from '../atoms/ButtonSubmit';
import {
  send_message
} from '../actions'

class MessageForm extends Component {
  __sendMessage(){
    let text =  this.textInput.getValue()
    this.textInput.clearValue()
    this.props.dispatch(send_message({
      socket: this.props.socket,
      message: text}
    ))
  }
  __handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.__sendMessage()
    }
  }

  render() {
    return (
      <div className="message-form">
        <MessageField
          ref={(input) => { this.textInput = input; }}
          onKeyPress={this.__handleKeyPress.bind(this)}
        />
        <ButtonSubmit onClick={this.__sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default MessageForm;