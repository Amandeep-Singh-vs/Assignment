// libraries
import React from 'react'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

// assets
var outerRing = require('../assets/images/outerRing.png');
var focus = require('../assets/images/focus.png');
var scan = require('../assets/images/scan.png');
var square = require('../assets/images/square.png');
var follow = require('../assets/images/follow.png');

// interface
import { Challenge } from './ActiveCards';

/** ActiveCard: {This function shows active cards according to the data given.} */
const ActiveCard = ({data}:{data:Challenge}) => {
    const buttonsData = ['2min', '4min', '8min']

    /** getImage: {This function returns the background image according to the name of challenge.} */
    function getImage(name:string){
        if(name === "Outer Ring") return outerRing
        else if(name === "Focus") return focus
        else if(name === "Scan") return scan
        else if(name === "Square") return square
        else if(name === "Follow") return follow
    }
  return (
    <View style={[styles.container]}>
        <ImageBackground source={getImage(data.name)} style={[styles.background,{elevation:data.dropShadow?data.dropShadow:0},{elevation:data.cardShadow?data.cardShadow:0}]}>
            <LinearGradient colors={['rgba(255,255,255,0.56)','rgba(255,255,255,0.12)','rgba(255,255,255,0)']} locations={[0, 0.8792, 1]}>
                <View style={styles.content}>
                    <Text style={[styles.txt,{color:data.color}]}>{data.name}</Text>
                </View>
            </LinearGradient>
            <LinearGradient colors={['rgba(255, 255, 255,0)','rgba(255, 255, 255, 0.8)']} locations={[0, 0.5]} style={{marginTop:47}}>
                <View style={styles.btncontainer}>
                    {
                        buttonsData.map((item,index)=>
                            <TouchableOpacity style={styles.btn} key={index}>
                                <Text style={styles.btntxt}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        marginBottom:20,
        backgroundColor:'rgba(255, 255, 255, 1)',
    },
    background:{
        borderRadius:16,
        overflow:'hidden',
    },
    content:{
        alignItems:'center',
    },
    txt:{
        fontFamily:'Fraunces_72pt-Bold',
        fontWeight:'700',
        fontSize:18,
        textAlign:'center',
        marginVertical:8,
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:12
    },
    btn:{
        marginVertical:12,
        backgroundColor:'white',
        borderRadius:8,
        elevation:3
    },
    btntxt:{
        color:'#292F36',
        fontFamily:'Quicksand-SemiBold',
        fontWeight:'600',
        fontSize:12,
        marginHorizontal:32,
        marginVertical:14,
    }
})

export default ActiveCard