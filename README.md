# app14
React Native app + Redux, test prototype for theUrbanForrest

## how to build - iOS only
This is a little hacky, needs to be improved:

1) In new folder, run react-native init app14

In this new app14 directory:

2) Add src from this repo
3) Replace package.json and index.ios.js from this repo

4) Run react-native install
5) Run react-native link

6) Open app14.xcodeproj, add to app14 > Info.plist:

- NSPhotoLibraryUsageDescription : "Needed for react-native-photo-upload"
- NSCameraUsageDescription : "Needed for react-native-photo-upload"
- NSMicrophoneUsageDescription : "Needed for react-native-photo-upload"

7) Run react-native run-ios