import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './topAppBar-styles'

import { settings } from '../../constants/screenChanger-constants'
import { ResizeMode } from '../../constants/common-constants'

/** TopAppBar: {This function displays the navbar and changes the title according to the props.title} */
const TopAppBar = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.blank} />
      <Text style={styles.txt}>{props.title}</Text>
      {props.title === 'D-active' ? (
        <View style={styles.blank} />
      ) : (
        <Image source={settings} resizeMode={ResizeMode.Contain} style={styles.img} />
      )}
    </View>
  )
}

export default TopAppBar