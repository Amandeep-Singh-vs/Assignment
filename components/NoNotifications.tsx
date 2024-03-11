// libraries
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// assets
var bell = require('../assets/images/noNotificationBell.png')

/** NoNotifications: {This function displays the screen with no notifications message.} */
const NoNotifications = () => {
  return (
    <View style={styles.container}>
      <Image source={bell} style={styles.img}/>
      <View style={styles.content}>
        <Text style={styles.txtBold}>No notifications yet!</Text>
        <Text style={styles.txtLight}>You have no notifications right now.{'\n'}Come back later.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:184,
    marginHorizontal:20,
  },
  img:{
    height:154,
    width:154,
    marginHorizontal:90.5,
  },
  content:{
    width:'100%',
    marginTop:27,
  },
  txtBold:{
    marginHorizontal:4,
    marginBottom:8,
    fontFamily:'Fraunces_9pt-Bold',
    fontWeight:'700',
    textAlign:'center',
    fontSize:24,
    color:'#454545',
  },
  txtLight:{
    fontFamily:'Quicksand-Light',
    fontWeight:'500',
    textAlign:'center',
    fontSize:16,
    color:'#292F36',
    textAlignVertical:'center'
  }
})

export default NoNotifications
