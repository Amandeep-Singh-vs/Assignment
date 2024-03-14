import React from 'react'
import { Image, Text, View } from 'react-native'

import { bell } from '../../constants/notification-constants'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './noData-styles'

/** NoData: {This function displays the screen with no notifications message.} */
const NoData = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode={ResizeMode.Contain} source={bell} style={styles.image} />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>No notifications yet!</Text>
        <Text style={styles.subTitle}>
          You have no notifications right now.{'\n'}Come back later.
        </Text>
      </View>
    </View>
  )
}

export default NoData
