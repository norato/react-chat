import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Message from '../atoms/Message';

storiesOf('Message', module)
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
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message {...message}/>
      </div>
    )
  })
  .add('Sent Message', () => {
    let time = new Date()
    let message = {
      text: 'Default Message',
      time: time.toString(),
      type: 'sent'
    }
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message {...message}/>
      </div>
    )
  })
  .add('Sent Message: big text', () => {
    let time = new Date()
    let message = {
      text: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus iaculis mauris,
              eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
              Etiam porta, mi a congue lobortis,`,
      time: time.toString(),
      type: 'sent'
    }
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: 'auto',
        padding: '15px 15px 15px 15px'
      }}
      >
        <Message {...message}/>
      </div>
    )
  })
  .add('Received Message', () => {
    let time = new Date()
    let message = {
      text: 'Default Message',
      time: time.toString(),
      type: 'received'
    }
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <Message {...message}/>
      </div>
    )
  })
  .add('Received Message: big text', () => {
    let time = new Date()
    let message = {
      text: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus iaculis mauris,
              eget porttitor nisi interdum sit amet. Phasellus eu rhoncus nisl.
              Etiam porta, mi a congue lobortis,`,
      time: time.toString(),
      type: 'received'
    }
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: 'auto',
        padding: '15px 15px 15px 15px'
      }}
      >
        <Message {...message}/>
      </div>
    )
  });