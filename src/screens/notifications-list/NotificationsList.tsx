import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import Notification from '../../components/notification-card/NotificationCard'
import NoData from '../../components/no-data/NoData'

import notifyData from '../../config/notifications_mockData.json'

export interface notifyType {
  id: number
  message: string
  timeStamp: string
  isSeen: boolean
  image: number
}

import { styles } from './notificationsList-styles'

/** Notifications: {This function shows the notification and noNotification component based on condition} */
const Notifications = () => {
  const renderItem: ListRenderItem<notifyType> = ({ item }) => <Notification data={item} />
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled
        data={notifyData}
        renderItem={renderItem}
        keyExtractor={(item: notifyType) => item.id.toString()}
        ListEmptyComponent={<NoData />}
      />
    </View>
  )
}

export default Notifications