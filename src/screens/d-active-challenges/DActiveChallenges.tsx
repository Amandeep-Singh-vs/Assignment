import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import DActiveCard from '../../components/d-active-card/DActiveCard'

import challenges from '../../config/challenges_mockData.json'

export interface Challenge {
  id: string
  name: string
  color: string
  dropShadow?: number
  cardShadow?: number
}

import { styles } from './dActiveChallenges-styles'

/** DActiveChallenges: {This function displays the notifications with the help of flatlist.} */
const DActiveChallenges = () => {
  const renderItem: ListRenderItem<Challenge> = ({ item }) => <DActiveCard data={item} />
  return (
      <FlatList scrollEnabled data={challenges} renderItem={renderItem} style={styles.container}/>
  )
}

export default DActiveChallenges