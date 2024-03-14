import React from 'react'
import { Image, Text, View } from 'react-native'

import { notifyType } from '../../screens/notifications-list/NotificationsList'

import { formatTimeAgo, getNotifyImage } from '../../utils/common-utils'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './notificationCard-styles'

/** Notification: {This function displays a single notification.} */
const Notification = ({ data }: { data: notifyType }) => {
  return (
    <View style={[styles.container, data.isSeen ? styles.active : null]}>
      <View style={styles.content}>
        <Image
          source={getNotifyImage(data.image)}
          resizeMode={ResizeMode.Contain}
          style={styles.img}
        />
        <Text style={styles.txt}>{data.message}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertxt}>{formatTimeAgo(data.timeStamp)} ago</Text>
      </View>
    </View>
  )
}

export default Notification