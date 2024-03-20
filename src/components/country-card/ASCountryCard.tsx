import React from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const ASCountryCard = () => {
  return (
    <View>
      <View>
        <Image />
        <Text>China</Text>
      </View>
      <View>
        <Text></Text>
        <View><Icon name='chevron-down'/></View>
      </View>
    </View>
  );
};

export default ASCountryCard;
