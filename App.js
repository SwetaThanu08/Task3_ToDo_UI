import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import Counter from './components/Counter';
import TopView from './components/TopView';
import BottomView from './components/BottomView';


export default function App() {
  return (

    <View style={styles.container}>
      
        <TopView />
        <Counter />
        <BottomView />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#000',
  },
});