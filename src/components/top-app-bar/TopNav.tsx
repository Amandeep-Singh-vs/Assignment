// libraries
import React from 'react'
import { Image, Text, View } from 'react-native'

// styles
import {styles} from './topNav-styles'

// constants
import { settings } from '../../constants/screenChanger-constants'

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