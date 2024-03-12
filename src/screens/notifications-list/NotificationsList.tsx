// libraries
import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

// components
import Notification from '../../components/notification-card/Notification'
import NoNotifications from '../../components/no-notification/NoNotifications'

// Mock data
import notifyData from '../../config/notifications_mockData.json'

// interface
export interface notifyType{
  id: number;
  message: string;
  time:string;
  isSeen:number;
  image:number;
}

// Styles
import {styles} from './notificationsList-styles'

/** Notifications: {This function shows the notification and noNotification component based on condition} */
const Notifications = () => {
  const renderItem: ListRenderItem<notifyType> = ({item}) => <Notification data={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled
        data={notifyData}
        renderItem={renderItem}
        keyExtractor={(item:notifyType,index:number)=>item.id.toString()}
        ListEmptyComponent={<NoNotifications/>}
      />
    </View>
  )
}

export default Notifications
