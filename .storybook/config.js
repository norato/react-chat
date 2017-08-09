/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import '../public/styles/main.css';

function loadStories() {
  // require('../src/stories/index');
  require('../src/stories/MessageField');
  require('../src/stories/ButtonSubmit');
  require('../src/stories/MessageForm');
  require('../src/stories/Message');
  require('../src/stories/MessageList'); 
}

configure(loadStories, module);
