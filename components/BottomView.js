import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';


export default function BottomView() {
    return (
        <>
        <View style={{height:64,flexDirection:'row'}}>

            <Text style={[styles.nameText,{marginTop:34}]}> Remainder </Text>

                    <TouchableOpacity>
                    <Text style={[styles.nameText,{marginTop:34,marginLeft:140,color:'#808080'}]}> see all </Text>
                    </TouchableOpacity>

        </View>
            
        <View style={styles.box}>
                <Text style={styles.Text}>Call</Text>
                <Text style={styles.Time}>06:00 pm</Text>
        </View>

        <View style={styles.box}>
                <Text style={styles.Text}>Seminar</Text>
                <Text style={styles.Time}>02:00 pm</Text>
        </View>

        <View style={styles.box}>
                <Text style={styles.Text}>Workout</Text>
                <Text style={styles.Time}>05:00 am</Text>
        </View>
        </>
);};

const styles= StyleSheet.create({  
    box: {
        width: 325,
        height: 75,
        backgroundColor:"#18191A",
        marginLeft:30,
        marginTop: 15,
        borderRadius:14,
    },
    nameText: {
        fontWeight:'400',
        fontSize:22,
        paddingLeft : 4,
        color: '#f0f8ff',
        marginLeft:10,
    },
    Text:{
        marginTop:10,
        marginLeft:22,
        fontSize:19,
        color:'#F5F5F5',
    },
    Time:{
        marginTop:3,
        marginLeft:22,
        fontSize:16,
        color:'#808080',
    },
})