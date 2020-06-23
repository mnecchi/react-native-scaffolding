# react-native-scaffolding
React Native scaffolding with Redux and Redux Flipper Debugger

After cloning run the following:

```bash
mv ios/scaffolding ios/[APP_NAME]

mv ios/scaffolding.xcodeproj/xcshareddata/xcschemes/scaffolding.xcscheme ios/scaffolding.xcodeproj/xcshareddata/xcschemes/[APP_NAME].xscheme

mv ios/scaffolding.xcodeproj ios/[APP_NAME].xcodeproj

mv ios/scaffolding.xcworkspace ios/[APP_NAME].xcworkspace

cd ios; pod install; cd ..
```

Then replace any occurence of `scaffolding` with your APP_NAME in the files.
