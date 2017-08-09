import React, { Component } from 'react';
import MessageField from '../atoms/MessageField';
import ButtonSubmit from '../atoms/ButtonSubmit';
import {
  send_message
} from '../actions'

class MessageForm extends Component {
  constructor(props){
    super(props)
  }
  __sendMessage(){
    let message = `Send Message ${Date()}`
    this.props.dispatch(send_message({socket: this.props.socket, message: message}))
  }
  render() {
    return (
      <div className="message-form">
        <MessageField ref={(input) => { this.textInput = input; }} />
        <ButtonSubmit onClick={this.__sendMessage.bind(this)}/>
      </div>
    )
  }
}

export default MessageForm;