import React from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNativeStackParamsList} from '../../types/navigation-types';
import {useNavigation} from '@react-navigation/native';

import {Fever, Cough, BreathingDifficulty} from '../../assets';
import {slides} from '../../constants/common-constants';
import {SPACING} from '../../theme';

import {styles} from './asOnBoardingCarousel';

const ASOnBoardingCarousel = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  const renderImage = (title: string) => {
    let image;
    switch (title) {
      case 'Fever':
        image = <Fever width={SPACING.space_248} height={SPACING.space_248} />;
        break;
      case 'Cough':
        image = <Cough width={SPACING.space_248} height={SPACING.space_248} />;
        break;
      case 'Breathing Difficulty':
        image = (
          <BreathingDifficulty
            width={SPACING.space_248}
            height={SPACING.space_248}
          />
        );
        break;
    }
    return image;
  };
  const buttonLabel = (label: string) => {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        activeDotStyle={styles.dots}
        data={slides}
        onSkip={() => {
          navigation.navigate('Login');
        }}
        onDone={() => {
          navigation.navigate('Login');
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.subContainer}>
              <View style={styles.imageContainer}>
                {renderImage(item.title)}
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.description}</Text>
            </View>
          );
        }}
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Next')}
        showSkipButton
      />
    </View>
  );
};

export default ASOnBoardingCarousel;
