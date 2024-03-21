import React from 'react';
import {View} from 'react-native';

import {ASOnBoardingCarousel} from '../../components';

import {styles} from './onBoarding-styles';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <ASOnBoardingCarousel />
    </View>
  );
};

export default OnBoarding;
