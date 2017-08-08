import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextField from '../atoms/TextField';

storiesOf('TextField', module)
  .add('default', () => {
    return <TextField />
  });