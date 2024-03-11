// libraries
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

// assets
const reflection = require('../assets/images/reflection.png')
const reminder = require('../assets/images/reminder.png')
const dActive = require('../assets/images/dActive.png')

// interface
import { notifyType } from './Notifications'

/** Notification: {This function displays a single notification.} */
const Notification = ({data}:{data:notifyType}) => {
  /** getImage: {This function returns an image according to type of image.} */
  function getImage(imageType:number){
    if(imageType == 0) return reflection;
    else if(imageType == 1) return reminder;
    else if(imageType == 2) return dActive;
  }
  /** formatTimeAgo: {This function returns an time in specific format according to time of notification.} */ 
  function formatTimeAgo(notificationTime:String) {
    const currentTime = new Date();
    const notificationDate = new Date();
    const [hours, minutes, seconds]:String[] = notificationTime.split(':');
    notificationDate.setDate(notificationDate.getDate() - 1);
    notificationDate.setHours(Number(hours), Number(minutes), Number(seconds));
    let timeDifference = currentTime.getTime( ) - notificationDate.getTime( );
    timeDifference = timeDifference<0 ? (-1*timeDifference) : timeDifference;
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo > 0) {
      return daysAgo + 'd ago';
    } else if (hoursAgo > 0) {
      return hoursAgo + 'h ago';
    } else if (minutesAgo > 0) {
      return minutesAgo + 'm ago';
    } else {
      return secondsAgo + 's ago';
    }
  }
  return (
    <View style={[styles.container,data.status==1?styles.active:null]}>
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

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    paddingVertical:17,
    borderBottomWidth:0.7,
    borderColor:'#E2E8EB',
  },
  content:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:4,
  },
  img:{
    marginRight:20,
    height:52.43,
    width:56.2,
  },
  txt:{
    flex:1,
    marginRight:8,
    fontFamily:'Quicksand-Medium',
    color:'#000000',
    fontWeight:'500',
    fontSize:14,
    textAlignVertical:'center',
  },
  timer:{
    flex:1,
    paddingHorizontal:76,
  },
  timertxt:{
    fontFamily:'Quicksand-Light',
    fontSize:12,
    fontWeight:'500',
    color:'#4E5E6C',
    textAlignVertical:'center'
  },
  active:{
    backgroundColor:'#F1FCFA'
  }
})

export default Notification
