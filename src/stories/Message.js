import React from 'react';
import Immutable from 'immutable'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Message from '../atoms/Message';

storiesOf('Message', module)
  .add('default', () => {
    let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
    let _message = {
      text: 'Default Message',
      time: time
    }
    let message = Immutable.fromJS(_message);
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message message={message}/>
      </div>
    )
  })
  .add('Sent Message', () => {
    let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
    let _message = {
      text: 'Default Message',
      time: time,
      type: 'sent'
    }
    let message = Immutable.fromJS(_message);
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message message={message}/>
      </div>
    )
  })
  .add('Sent Message: big text', () => {
    let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
    let _message = {
      text: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus iaculis mauris,
              eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
              Etiam porta, mi a congue lobortis,`,
      time: time,
      type: 'sent'
    }
    let message = Immutable.fromJS(_message);
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: 'auto',
        padding: '15px 15px 15px 15px'
      }}
      >
        <Message message={message}/>
      </div>
    )
  })
  .add('Received Message', () => {
    let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
    let _message = {
      text: 'Default Message',
      time: time,
      type: 'received'
    }
    let message = Immutable.fromJS(_message);
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message message={message}/>
      </div>
    )
  })
  .add('Received Message: big text', () => {
    let time = "Wed Aug 09 2017 12:41:17 GMT-0300 (BRT)"
    let _message = {
      text: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus iaculis mauris,
              eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
              Etiam porta, mi a congue lobortis,`,
      time: time,
      type: 'received'
    }
    let message = Immutable.fromJS(_message);
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: 'auto',
        padding: '15px 15px 15px 15px'
      }}
      >
        <Message message={message}/>
      </div>
    )
  });