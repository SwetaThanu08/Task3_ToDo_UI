import React from 'react';
import { StyleSheet,View,Text,ScrollView,TouchableOpacity} from 'react-native';


export default function TopView() {
    return (

  <View style={styles.mid}>

      <View style={styles.top}>
        <Text style={styles.nameText}> Sweta Thanu</Text>
          <TouchableOpacity><Text style={[styles.nameText,{marginLeft:138,color:'#f0f8ff'}]}>Home</Text></TouchableOpacity>
      </View>
           
      <View style={{flexDirection:'row',height:92,position:'absolute'}}><Text style={styles.ProgressText}> Tasks </Text></View>

      <ScrollView horizontal>

        <View style={styles.box}>
            <Text style={styles.progresBox}>Art 🎨{"\n"}
              <Text style={{fontSize:20,color:'#ffffff'}}>Submission @ 8 pm</Text>
            </Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.progresBox}>Sports🎾{"\n"}
              <Text style={{fontSize:20,color:'#ffffff'}}>Join Badminton class </Text>
            </Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.progresBox}>Maths✨{"\n"}
              <Text style={{fontSize:20,color:'#ffffff'}}>Test today !</Text>
            </Text>
        </View>

      </ScrollView>

  </View>
 
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#000',
    },
    top: {
      backgroundColor:'#8b008b',
      borderBottomEndRadius:40,
      height:40,
      width: 400,      
      position: 'absolute',
      flexDirection:'row'
      },
    mid: {
      backgroundColor:'#001f30' ,
      height:252,
      flexDirection:'row',
    },
    nameText: {
      fontStyle:'italic',
      fontWeight:'300',
      fontSize:26,
      paddingLeft : 4,
      color: '#f0f8ff',
    },
    ProgressText:{
      marginTop:59,
      paddingLeft:4,
      fontSize:22,
      color:'#F5F5F5',
  },
    text:{
      color:'#f0f8ff',
      fontSize:24,
      fontStyle:'italic',
      marginHorizontal:15,
      marginTop:8,
    },
  
    progresBox:{
      color:'black',
       marginLeft:10,
       marginTop:9,
       fontSize:22,
       fontWeight:"400",
    },
    box: {
      width: 200,
      height: 120,
      backgroundColor:"#f41f31",
      marginLeft:18,
      marginTop: 100,
      borderRadius:20,
      flexDirection: 'row',
    },
  });
  