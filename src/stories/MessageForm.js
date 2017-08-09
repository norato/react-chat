import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MessageForm from '../organisms/MessageForm';

storiesOf('MessageForm', module)
  .add('default', () => {
    return (
      <div
      style={{
        background: '#F7F7F7',
        height: '60px',
        padding: '15px 15px 0 15px'
      }}
      >
        <MessageForm/>
      </div>
    )
  });