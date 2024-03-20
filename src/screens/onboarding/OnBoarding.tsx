import React from 'react';
import {View} from 'react-native';

import {ASOnBoardingCarousel} from '../../components';

const OnBoarding = (props: any) => {
  const {setLoginScreen} = props;
  return (
    <View style={{flex: 1}}>
      <ASOnBoardingCarousel setLoginScreen={setLoginScreen} />
    </View>
  );
};

export default OnBoarding;
