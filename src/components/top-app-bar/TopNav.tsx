// libraries
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// assets
var settings = require('../../assets/images/settings.png')

// styles
import {styles} from './topNav-styles'

/** TopNav: {This function displays the navbar and changes the title according to the props.title} */
const TopNav = (props:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.blank}></View>
      <Text style={styles.txt}>{props.title}</Text>
      {props.title==="D-active"?<View style={styles.blank}></View>:<Image source={settings} style={styles.img}/>}
    </View>
  )
}

export default TopNav