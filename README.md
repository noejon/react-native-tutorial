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

#### Windows/Android

#### MacOS/Android-iOS