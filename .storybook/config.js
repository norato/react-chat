/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import infoAddon from '@kadira/react-storybook-addon-info';
import '../public/styles/main.css';


function loadStories() {
  require('../src/stories/MessageField');
  require('../src/stories/ButtonSubmit');
  require('../src/stories/MessageForm');
  require('../src/stories/Message');
  require('../src/stories/MessageList'); 
}
// setAddon(infoAddon);

configure(loadStories, module);
