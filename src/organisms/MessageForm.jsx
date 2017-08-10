import React, { Component } from 'react';
import MessageField from '../atoms/MessageField';
import ButtonSubmit from '../atoms/ButtonSubmit';
import {
  send_message
} from '../actions'

class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonClassName : 'hide'
    }
  }
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
  
  __handleFocus(e) {
    this.setState({
      buttonClassName: 'show'
    })
  }
  
  __handleBlur(e) {
    this.setState({
      buttonClassName: 'hide'
    })
  }

  render() {
    return (
      <div className="message-form">
        <MessageField
          ref={(input) => { this.textInput = input; }}
          onKeyPress={this.__handleKeyPress.bind(this)}
          onFocus={this.__handleFocus.bind(this)}
          onBlur={this.__handleBlur.bind(this)}
        />
        <ButtonSubmit
          onClick={this.__sendMessage.bind(this)}
          className={ this.state.buttonClassName }
        />
      </div>
    )
  }
}

export default MessageForm;