// @flow

import { configure } from '@storybook/react';

// $FlowFixMe story-loader is generated by react-native-story-loader
import { loadStories } from '../story-loader'; //eslint-disable-line

configure(loadStories, module);
