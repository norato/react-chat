import React from 'react';
import Immutable from 'immutable'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MessageList from '../organisms/MessageList';

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

const Messages = Immutable.fromJS(messages);

storiesOf('MessageList', module)
  .add('default', () => {
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
  