/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Agenda from './src/screens/Agenda'

AppRegistry.registerComponent(appName, () => Agenda);

// esconder Yellow Box

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: DatePickerIOS has been merged with DatePickerAndroid',
  'Warning: DatePickerAndroid has been merged with DatePickerIOS',
  'Warning: componentWillReceiveProps has been renamed',
  'Module RCTImageLoader requires',
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: AsyncStorage has been extracted from ',
  'Warning: componentWillMount has been renamed',
]);
