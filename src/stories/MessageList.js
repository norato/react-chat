import React from 'react';
import Immutable from 'immutable'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MessageList from '../organisms/MessageList';

let time = new Date()
const messages = [
  {
    text: 'Default Message',
    time: time.toString(),
    type: 'sent'
  },
  {
    time: time.toString(),
    type: 'received',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  },
  {
    text: 'Default Message',
    time: time.toString(),
    type: 'received'
  },
  {
    time: time.toString(),
    type: 'sent',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  },
  {
    text: 'Default Message',
    time: time.toString(),
    type: 'sent'
  },
  {
    time: time.toString(),
    type: 'received',
    text: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras maximus iaculis mauris,
            eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
            Etiam porta, mi a congue lobortis,`,
  }
]

const Messages = Immutable.fromJS(messages);

storiesOf('MessageList', module)
  .add('default', () => {
    let time = new Date()
    let message = {
      text: 'Default Message',
      time: time.toString()
    }
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: 'auto',
        padding: '15px 15px 15px 15px'
      }}
      >
        <MessageList Messages={Messages}/>
      </div>
    )
  });
  