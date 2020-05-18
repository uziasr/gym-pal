import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Navigator from './routes/Navigator'
// import MyTabs from './routes/TabNavigator'
import  Navigator from './routes/homeStack'
// import Navigator from './routes/homeStack'


import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <>
    <Navigator/>
    {/* <MyTabs/> */}
    {/* <Tabs/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
