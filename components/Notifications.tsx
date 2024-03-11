// libraries
import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

// components
import Notification from './Notification'
import NoNotifications from './NoNotifications'

// Mock data
import notifyData from '../config/notifications_mockData.json'

// interface
export interface notifyType{
  id: number;
  message: string;
  time:string;
  status:number;
  image:number;
}

/** Notifications: {This function shows the notification and noNotification component based on condition} */
const Notifications = () => {
  const renderItem: ListRenderItem<notifyType> = ({item}) => <Notification data={item} />;
  return (
    <View style={{flex:1,marginTop:16}}>
      {
        !notifyData.length?(
          <FlatList scrollEnabled data={notifyData} renderItem={renderItem}/>
        ):(
          <NoNotifications />
        )
      }
    </View>
  )
}

export default Notifications
