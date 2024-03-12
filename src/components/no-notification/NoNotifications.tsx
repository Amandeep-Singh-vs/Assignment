// libraries
import React from 'react'
import { Image, Text, View } from 'react-native'

// constants
import { bell } from '../../constants/notification-constants'

// styles
import {styles} from './noNotification-styles'

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

export default NoNotifications