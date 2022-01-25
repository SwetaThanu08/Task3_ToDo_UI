import React, { useState } from 'react';
import {StyleSheet,View,Text,Button,Alert} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount +1 )
  };
  
  const handleDecrement = () => {
    setCount(prevCount => prevCount -1 )
  };


  return (
    <>
    <View style={styles.countButton}>
      <Button title=' -1 ' onPress={handleDecrement}></Button>
      <Text style={styles.text}> 😎Tasks left : {count} !</Text>
      <Button title=' +1 ' onPress={handleIncrement}></Button>
    </View>

    <View style={styles.doneButton}>
      <Button title= 'Done' onPress={() => Alert.alert("Woo-hoo🎉🔥!  That's a job well done!  Keep up the good work :)") }></Button>
    </View>

    </>
  );
};


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#000',
    },
    text:{
        color:'#fff',
        fontSize:28,
        fontStyle:'normal',
        textAlign :'center',
    },
    countButton:{
        borderRadius:30,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    doneButton:{
        flexDirection: 'row',
        justifyContent:"space-evenly",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 40,
    },
});

export default Counter;