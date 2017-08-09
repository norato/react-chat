import React, { Component } from 'react';
import MessageField from '../atoms/MessageField';
import ButtonSubmit from '../atoms/ButtonSubmit';

class MessageForm extends Component {
  render() {
    return (
      <div className="message-form">
        <MessageField/>
        <ButtonSubmit/>
      </div>
    )
  }
}

export default MessageForm;