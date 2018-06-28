import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {
//   AppRegistry
// } from 'react-native';

import FetchLocation from './components/FetchLocation'


export default class app extends React.Component {
  getUserLocationHandler = () => {
 }
  render() {
    return (
      <View style={styles.container}>
        <Text>hii</Text>
      
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// AppRegistry.registerComponent('app', () => app);