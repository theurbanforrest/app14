# app14
React Native app + Redux, test prototype for theUrbanForrest

## how to build
1) Execute npm install
2) Execute npm link

3) In file index.ios.js, replace with:

'use strict'

import { AppRegistry } from 'react-native'
import Main from './src'
AppRegistry.registerComponent('app14', () => Main)

4) Execute react-native run-ios