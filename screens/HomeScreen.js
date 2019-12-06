import * as WebBrowser from 'expo-web-browser';
import { Component } from 'react';

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

export default class MyAppHome extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.state = { text2: '' };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/wism.png')
                  : require('../assets/images/wism.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Where Is My?</Text>
          </View>

          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40, borderBottomWidth: 2, borderBottomColor: '#000000' }}
              placeholder="Enter Mobile Number"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
            <Text style={{ padding: 10, fontSize: 12, color: 'rgba(255,0,0, 1)'}}>
              {
                mobileSubmit(this.state.text)
              }
            </Text>
            <Button id="submitButton" title="Submit" onPress={saveMobile()} disabled={toggleButton(this.state.text)}/>
          </View>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

import { MonoText } from '../components/StyledText';


/* HomeScreen.navigationOptions = {
  header: null,
}; */

function mobileSubmit(text) {
  if (!text) {
    return "Please enter mobile number!"
  }
  else {

    if (isNaN(text)) {
      return "Please enter only numbers!"
    }

    if (text.length != 11) {
      return "Mobile number should be 11 numbers!"
    }

    var phoneRe = /^01[0125]\d{8}$/;
    if (!phoneRe.test(text)) {
      return "Wrong mobile number!";
    }
  }
}

function toggleButton(text)
{
  var resp = mobileSubmit(text)
  if(!resp || typeof resp === "undefined")
    return false;
  else
    return true;
}

function saveMobile() {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    // marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
