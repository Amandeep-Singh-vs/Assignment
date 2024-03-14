import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './topAppBar-styles'

import { dActive, settings } from '../../constants/screenChanger-constants'
import { ResizeMode } from '../../constants/common-constants'

/** TopAppBar: {This function displays the navbar and changes the title according to the props.title} */
interface IProps {
  title: string
}
const TopAppBar = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.blank} />
      <Text style={styles.txt}>{props.title}</Text>
      {props.title === dActive ? (
        <View style={styles.blank} />
      ) : (
        <Image resizeMode={ResizeMode.Contain} source={settings} style={styles.img} />
      )}
    </View>
  )
}

export default TopAppBar
