/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index');
  require('../src/stories/TextField');
}

configure(loadStories, module);
