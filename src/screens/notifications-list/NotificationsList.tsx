import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import NoData from '../../components/no-data/NoData'
import Notification from '../../components/notification-card/NotificationCard'

import notifyData from '../../config/notifications_mockData.json'

export interface NotifyType {
  id: number
  image: number
  isSeen: boolean
  message: string
  timeStamp: string
}

import { styles } from './notificationsList-styles'

/** Notifications: {This function shows the notification and noNotification component based on condition} */
const Notifications = () => {
  const renderItem: ListRenderItem<NotifyType> = ({ item }) => <Notification data={item} />
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<NoData />}
        data={notifyData}
        keyExtractor={(item: NotifyType) => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
      />
    </View>
  )
}

export default Notifications
