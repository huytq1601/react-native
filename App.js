import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  constructor(props) {
    super(props)

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      }
    });
  }

  render() {
    return (
      <View>
        <Text>Please work !!! 😢</Text>
      </View>
    );
  }
}
