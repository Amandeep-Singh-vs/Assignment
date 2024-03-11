// libraries
import React from 'react'
import { ColorValue, FlatList, ListRenderItem, StyleSheet, View } from 'react-native'

// Components
import ActiveCard from './ActiveCard'

// interface
export interface Challenge{
  id: string;
  name: string;
  color:string;
  dropShadow?:number;
  cardShadow? : number;
}

/** ActiveCards: {This function displays the notifications with the help of flatlist.} */
const ActiveCards = () => {

  // Challenges data
  const challenges:Challenge[] = [
    {
      id:'1',
      name:"Outer Ring",
      color:'#D72B6A'
    },
    {
      id:'2',
      name:"Focus",
      color:'#176E6D',
      dropShadow:4
    },
    {
      id:'3',
      name:"Scan",
      color:'#B96204'
    },
    {
      id:'4',
      name:"Square",
      color:'#176E6D',
      cardShadow:2
    },
    {
      id:'5',
      name:"Follow",
      color:'#292F36'
    },
    {
      id:'6',
      name:"Outer Ring",
      color:'#D72B6A'
    },
    {
      id:'7',
      name:"Focus",
      color:'#176E6D',
      dropShadow:4
    },
    {
      id:'8',
      name:"Scan",
      color:'#B96204'
    },
    {
      id:'9',
      name:"Square",
      color:'#176E6D',
      cardShadow:2
    },
    {
      id:'10',
      name:"Follow",
      color:'#292F36'
    },
  ]
  const renderItem: ListRenderItem<Challenge> = ({item}) => <ActiveCard data={item} />;
  return (
    <View style={styles.container}>
      <FlatList scrollEnabled data={challenges} renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:20,
    marginVertical:24,
  }
})

export default ActiveCards
