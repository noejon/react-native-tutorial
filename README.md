# react-native-tutorial

## Pre-requesite

Install the latest version of (nodejs)[https://nodejs.org/en/]

Alternatively use `nvm` or (check windows here)

## Project scaffolding

### Expo

What is expo?

Install the expo-cli `npm i -g expo-cli`

## Run the project

To run the project `expo` or `native app`
(Here)[https://facebook.github.io/react-native/docs/getting-started] is the link to the `react-native` page

### Expo

To use expo:
-
-
-

### Native app

(In the official documentation)[https://facebook.github.io/react-native/docs/getting-started] go to the `Building Projects with Native Code` tab.
You will have the choice for your development OS and your target OS

NOTES: Please note that in order to write an app for iOS you will need to develop on a macOS machine

#### Linux/Android

Install the react-native CLI
`npm i -g react-native-cli`

Install the recommended Java Development Kit (JDK 8 when this tutorial was written).

I use Ubuntu, so here is how I installed and setup JDK8 on Ubuntu

##### How to install Java 8 using the Oracle JDK
To install Java 8 (which will reach its end of life January 2019!), follow these instructions:

###### Update apt-get
You should always update your system first before you do anything else. Run the following commands:

```
sudo apt-get update && apt-get upgrade
```
And install the required package if you don’t have it already installed:

```
sudo apt-get install software-properties-common
```

###### Step 2: Add the Java repository
The first thing you need to do is add a third party repository to get the Oracle JDK. We’ll use the one from WebUpd8, but you can use any other repository:

```
sudo add-apt-repository ppa:webupd8team/java
```
And then update your package list again:

```
sudo apt-get update
```

###### Step 3: Install Java
To install the JDK8 run the following command:

```
apt-get install oracle-java8-installer
```

Java should now be installed and can be verified by running 

```
java -version
```

JAVA_HOME setup.

To check the content of your current JAVA_HOME run the command 
```
echo $JAVA_HOME
```
If you followed this tutorial the chances is that it is empty. It needs to be populated for other applications to find the location of the Java installation.
To figure out where Java is currently installed run the following

```
update-alternatives --config java
```
The installation should be found under the `path` column. Copy that installation path to the clipboard (the path for me was `/usr/lib/jvm/java-8-oracle/jre/bin/java`)

To setup JAVA_HOME in the PATH, the environment needs to be updated:
```
sudo vi /etc/environment
```

Add `JAVA_HOME="path/to/java/installation"` to the file.

At this point your file is updated, but the system needs to be notified that this variable has been added. 

```
source /etc/environment
```

To check if `JAVA_HOME` has been set up correctly, run `echo $JAVA_HOME` once again.
The proper installation path should be displayed.


Once Java is installed, the next step is to install Android studio

##### Android Studio

(Download and install Android Studio)[https://developer.android.com/studio/]

I am using ubuntu so to install android studio I have used a CLI called `snap`

```
sudo apt-get update && apt-get upgarde
```

```
sudo apt install snapd
```

```
snap install android-studio --classic
```

Android Studio now needs to be configured.

Check if `$HOME/.bash_profile` exists.

If it does not exist create it by running `touch $HOME/.bash_profile`
Open the file with your preferred text editor and add the following lines

```sh
#Android configuration
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

This is in the case you are using bash as your shell. I am using `zsh` and had to add the previous exports to `$HOME/.zshrc` instead.
```zsh
#Android configuration
export ANDROID_HOME=$HOME/Android/Sdk
path=($path "${ANDROID_HOME}/emulator" )
path=($path "${ANDROID_HOME}/tools" )
path=($path "${ANDROID_HOME}/tools/bin" )
path=($path "${ANDROID_HOME}/platform-tools" )
```

Run the source command on the file you just edited `source $HOME/.zshrc` and run `echo $PATH` to check if your path has been modified properly.

You should see `/home/noejon/Android/Sdk/emulator /home/noejon/Android/Sdk/tools /home/noejon/Android/Sdk/tools/bin /home/noejon/Android/Sdk/platform-tools`

#### Windows/Android

#### MacOS/Android-iOS

####Setting up Android Studio

- Custom
- SDK Component Setup
    - make sure that Android SDK is ticked 
    - also make sure that Android Virtual Device is ticked


The next thing to configure is the Android SDK. Android Studio installs, the latest version of the SDK, but react-native needs a specific version of that can be found (here)[https://facebook.github.io/react-native/docs/getting-started#2-install-the-android-sdk]

https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied


### Adding typescript

https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native

`npm i --save-dev typescript`
`npm i --save-dev react-native-typescript-transformer`

Then run the following command to initialise a `tsconfig.json` file

`tsc --init --pretty --jsx react`

NOTE: To run the tsc CLI, `typescript` must be installed globally (`npm i -g typescript`)

Open the created file, which should mostly be fine, and uncomment the following line:
```json
{
  /* Search the config file for the following line and uncomment it. */
  // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
}
```

Create a `rn-cli.config` file using `touch` or directly in your folder or editor. This file contains the settings for the react native typescript transformer.
Open the created file and add the following lines:

``` js
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};

```

As we decided to use typescript, we also need to install the types for react and react native
`npm i --save-dev @types/react @types/react-native`

Next to run the unit tests, ts-jest needs to be installed

`npm i -save-dev ts-jest`

### Updating the code

Expect for `index.js`, the files files using `JSX` should now be renamed to have the `tsx` extension and `ts` if the files do not contain any `JSX`
At this point we just created a starter project, which uses default javascript. To test that your typescript installation works as intended, the following files need to be modified:
`App.js`
- Rename the file to `App.tsx`
- Because of the way Typescript and Babel works, there is currently a difference when using operating with CommonJs modules. The import needs to change from 
```ts
import React, {Component} from 'react';
```
to 
```ts
import React from 'react';
import {Component} from 'react';
```

Replace the `export default` from App.tsx with 

```ts
export interface Props {
}

interface State {
  placeName: string
}

export class App extends Component<Props, State> {
```

And the last thing is to update the `index.js` with the proper App

`import {App} from ./App` instead of `import App from ./App`