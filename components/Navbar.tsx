// libraries
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// assets
var topLeftIcon = require('../assets/images/topLeftIcon.png');
var topRightIcon = require('../assets/images/topRightIcon.png')

/** Navbar: {This function displays the navbar and changes the title according to the props.title} */
const Navbar = (props:any) => {
  return (
    <View style={styles.container}>
      <Image source={topLeftIcon} style={styles.img}/>
      <Text style={styles.txt}>{props.title}</Text>
      {props.title==="D-active"?<Image source={topLeftIcon} style={styles.img}/>:<Image source={topRightIcon} style={styles.img}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:24,
    paddingVertical:16,
  },
  img:{
    height:24,
    width:24,
  },
  txt:{
    flex:1,
    fontSize:18,
    fontWeight:'700',
    textAlign:'center',
    fontFamily:"Fraunces_9pt-Bold",
    color:'#292F36',
    marginHorizontal:16,
  }
})

export default Navbar
