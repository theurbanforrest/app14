# app14
React Native app + Redux, test prototype for theUrbanForrest

## how to build - iOS only
1) Execute npm install
2) Execute npm link

3) In file index.ios.js, replace with:

'use strict'

import { AppRegistry } from 'react-native'
import Main from './src'
AppRegistry.registerComponent('app14', () => Main)

4) In XCode, add to app14 > Info.plist:

- NSPhotoLibraryUsageDescription : "Needed for react-native-photo-upload"
- NSCameraUsageDescription : "Needed for react-native-photo-upload"
- NSMicrophoneUsageDescription : "Needed for react-native-photo-upload"

4) Execute react-native run-ios