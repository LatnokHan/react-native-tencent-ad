/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TencentAdSplash} from 'react-native-tencent-ad'

class example extends Component {

  componentWillMount(){
      TencentAdSplash.addEventListener('splashAdSuccessPresentScreen', ()=>{
        console.log("---splashAdSuccessPresentScreen");
      });

      TencentAdSplash.addEventListener('splashAdClosed', ()=>{
        console.log("---splashAdClosed");
      });

      TencentAdSplash.addEventListener('splashAdClicked', ()=>{
        console.log("---splashAdClicked");
      });

      TencentAdSplash.addEventListener('splashAdFailToPresent', (error)=>{
        console.log("---splashAdFailToPresent");
        console.log(error);
      });

      TencentAdSplash.setTimeOut(5);
      TencentAdSplash.setBackgroundColor("#FF0000");
      TencentAdSplash.showSplash("1101152570", "8863364436303842593", "com.qq.e.union.demo:layout:splash_bottom");
    }

    componentWillUnmount(){
      TencentAdSplash.removeAllListeners();
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
