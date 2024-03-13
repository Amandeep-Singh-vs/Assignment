// libraries
import React from 'react'
import { Image, Text, View } from 'react-native'

// interface
import { notifyType } from '../../screens/notifications-list/NotificationsList'

// constants
import {reflection,reminder,dActive} from '../../constants/notification-constants'
import { formatTimeAgo } from '../../utils/common-utils'
import { ResizeMode } from '../../constants/common-constants'

// styles
import {styles} from './notification-styles'

/** Notification: {This function displays a single notification.} */
const Notification = ({data}:{data:notifyType}) => {
  /** getImage: {This function returns an image according to type of image.} */
  const getImage=(imageType:number)=>{
    let imageName = undefined;
    if(imageType == 0)
    {
      imageName = reflection;
    }
    else if(imageType == 1){
      imageName = reminder;
    }
    else if(imageType == 2){
      imageName = dActive;
    }
    return imageName
  }
  
  return (
    <View style={[styles.container,data.isSeen==1?styles.active:null]}>
      <View style={styles.content}>
        <Image source={getImage(data.image)} resizeMode={ResizeMode.Contain} style={styles.img}/>
        <Text style={styles.txt}>{data.message}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertxt}>{formatTimeAgo(data.time)}</Text>
      </View>
    </View>
  )
}

export default Notification