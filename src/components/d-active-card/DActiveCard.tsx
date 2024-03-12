// libraries
import React from 'react'
import {ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

// Styles
import {styles} from './dActiveCard-styles';

// interface
import { Challenge } from '../../screens/d-active-challenges/DActiveChallenges';

// theme
import { SPACING } from '../../theme/spacing';

// constants
import { GRADIENTCOLORS,buttonsData,outerRing,focus,scan,square,follow,noChallenge } from '../../constants/dActivechallenges-constants';

/** DActiveCard: {This function shows active cards according to the data given.} */
const DActiveCard = ({data}:{data:Challenge}) => {
    let imageName = noChallenge;
    /** getImage: {This function returns the background image according to the name of challenge.} */
    const getImage=(name:string)=>{
        switch (name) {
            case "Outer Ring":
                imageName = outerRing;
                break;
            case "Focus":
                imageName = focus;
                break;
            case "Scan":
                imageName = scan;
                break;
            case "Square":
                imageName = square;
                break;
            case "Follow":
                imageName = follow;
                break;
        }
        return imageName;
    }
  return (
    <View style={styles.container}>
        <ImageBackground source={getImage(data.name)} style={[styles.background,{elevation:data.dropShadow?data.dropShadow:0},{elevation:data.cardShadow?data.cardShadow:0}]}>
            <LinearGradient colors={GRADIENTCOLORS.gdcolor1} locations={[0, 0.8792, 1]}>
                <View style={styles.content}>
                    <Text style={[styles.txt,{color:data.color}]}>{data.name}</Text>
                </View>
            </LinearGradient>
            <LinearGradient colors={GRADIENTCOLORS.gdcolor2} locations={[0, 0.5]} style={{marginTop:SPACING.space_47}}>
                <View style={styles.btncontainer}>
                    {
                        buttonsData.map((item,index)=>
                            <TouchableOpacity style={styles.btn} key={index}>
                                <Text style={styles.btntxt}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
  )
}

export default DActiveCard