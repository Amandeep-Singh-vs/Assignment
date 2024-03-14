import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './dActiveCard-styles'

import { Challenge } from '../../screens/d-active-challenges/DActiveChallenges'

import { backgroundGradients } from '../../theme/color'
import { SPACING } from '../../theme/spacing'

import { buttonsData } from '../../constants/dActivechallenges-constants'
import { ResizeMode } from '../../constants/common-constants'

import { getImage } from '../../utils/common-utils'

/** DActiveCard: {This function shows active cards according to the data given.} */
const DActiveCard = ({ data }: { data: Challenge }) => {
  const renderButtons = () => {
    return buttonsData.map((time, index) => (
      <TouchableOpacity key={index} style={styles.btn}>
        <Text style={styles.btntxt}>{time}</Text>
      </TouchableOpacity>
    ))
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={ResizeMode.Contain}
        source={getImage(data.name)}
        style={[styles.background, { elevation: data.dropShadow || data.cardShadow || 0 }]}>
        <LinearGradient colors={backgroundGradients.gdcolor1} locations={[0, 0.8792, 1]}>
          <View style={styles.content}>
            <Text style={[styles.txt, { color: data.color }]}>{data.name}</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={backgroundGradients.gdcolor2}
          locations={[0, 0.5]}
          style={{ marginTop: SPACING.space_47 }}>
          <View style={styles.btncontainer}>{renderButtons()}</View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default DActiveCard
