import React from 'react';
import Immutable from 'immutable'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MessageList from '../organisms/MessageList';
import MessageForm from '../organisms/MessageForm';

let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
const messages = [
  {
    text: 'Default Message',
    time: time,
    type: 'sent'
  },
  {
    time: time,
    type: 'received',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  },
  {
    text: 'Default Message',
    time: time,
    type: 'received'
  },
  {
    time: time,
    type: 'sent',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  },
  {
    text: 'Default Message',
    time: time,
    type: 'sent'
  },
  {
    time: time,
    type: 'received',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  }
]
let _messages = []
for (var i = 0; i < 5; i++) {
  _messages.push(messages)
  
}
var mergedMessages = [].concat.apply([], _messages);

const Messages = Immutable.fromJS(mergedMessages);

storiesOf('App', module)
  .add('default', () => {
    return (
      <div className="app-container"> 
        <MessageList
          className="app-container__message-list"
          Messages={Messages}
        />
        <MessageForm 
          className="app-container__message-form"
        />
      </div>
    )
  });