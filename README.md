
🚀 Halialabs - Assignment for Mobile Developer 2019
===========================================

### Steps to setup

1. Run `yarn` or `npm install` to install dependencies
2. Run `react-native eject` to upgrade and add iOS & Android Folders.
3. Run `react-native link`

Just to note..

Latest versions of react-naviagtion uses gesture handler which is native module. For android you have to do some additional steps to configure them. Follow [these instructions](https://reactnavigation.org/docs/en/getting-started.html)


### To Run
1. Start the packager with `npm start`
2. Connect a mobile device to your development machine or start emulator
3. Run the application:

  - On Android:
      Run `react-native run-android`
  - On iOS:
      Open ios/Assignment4m.xcodeproj in Xcode
      Hit Run after selecting the desired device
4. All done?, let's start..

### Todo
1. Create a new component, to be displayed on home page
2. Create a native module which can generate random integer
3. Component should
    - call the native module to get the random number as count
    - fetch the `https://picsum.photos/v2/list?limit=${count}` by specifying the count
    - show the images on the screen like a grid as suggested in output image
4. Write Jest or any testing framework test cases
5. Submit the assignment with screenshots of working code.
6. Enjoy..


![Output](images/outputImage.png)
# assignment
