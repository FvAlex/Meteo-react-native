import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Otherday from './components/Otherdays';
import Today from './components/Today';

export default function App() {

  return (
    <View style={styles.container}>
      <Today/>
      <Otherday/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   border: 'solid black',
  //   width: 800,
  //   height: 600,
  //   borderRadius: 30,
  //   margin: 'auto',
  //   marginTop: '20%',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 6,
  //   },
  //   shadowOpacity: 0.39,
  //   shadowRadius: 8.30,

  //   elevation: 13
  // }
  
});
