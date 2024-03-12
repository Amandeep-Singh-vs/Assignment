// libraries
import React from 'react'
import { Image, Text, View } from 'react-native'

// interface
import { notifyType } from '../../screens/notifications-list/NotificationsList'

// constants
import {reflection,reminder,dActive} from '../../constants/notification-constants'

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
  /** formatTimeAgo: {This function returns an time in specific format according to time of notification.} */ 
  const formatTimeAgo=(notificationTime:String)=> {
    const currentTime = new Date();
    const notificationDate = new Date();
    const [hours, minutes, seconds]:String[] = notificationTime.split(':');
    notificationDate.setDate(notificationDate.getDate());
    notificationDate.setHours(Number(hours), Number(minutes), Number(seconds));
    let timeDifference = currentTime.getTime( ) - notificationDate.getTime( );
    timeDifference = timeDifference<0 ? (-1*timeDifference) : timeDifference;
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    let formattedTime = undefined;
    if (daysAgo > 0) {
      formattedTime = daysAgo + 'd ago';
    } else if (hoursAgo > 0) {
      formattedTime = hoursAgo + 'h ago';
    } else if (minutesAgo > 0) {
      formattedTime = minutesAgo + 'm ago';
    } else {
      formattedTime = secondsAgo + 's ago';
    }
    return formattedTime;
  }
  return (
    <View style={[styles.container,data.isSeen==1?styles.active:null]}>
      <View style={styles.content}>
        <Image source={getImage(data.image)} style={styles.img}/>
        <Text style={styles.txt}>{data.message}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertxt}>{formatTimeAgo(data.time)}</Text>
      </View>
    </View>
  )
}

export default Notification