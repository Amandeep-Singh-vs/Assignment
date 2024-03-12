// libraries
import React from 'react'
import { ColorValue, FlatList, ListRenderItem, StyleSheet, View } from 'react-native'

// Components
import ActiveCard from '../../components/d-active-card/DActiveCard'

// Challenges mock data
import challenges from '../../config/challenges_mockData.json'

// interface
export interface Challenge{
  id: string;
  name: string;
  color:string;
  dropShadow?:number;
  cardShadow? : number;
}

// styles
import {styles} from './dActiveChallenges-styles'

/** DActiveChallenges: {This function displays the notifications with the help of flatlist.} */
const DActiveChallenges = () => {
  const renderItem: ListRenderItem<Challenge> = ({item}) => <ActiveCard data={item} />;
  return (
    <View style={styles.container}>
      <FlatList scrollEnabled data={challenges} renderItem={renderItem}/>
    </View>
  )
}

export default DActiveChallenges