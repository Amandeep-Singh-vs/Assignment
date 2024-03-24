import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {COLORS, SPACING} from '../../theme';
import {IApiData} from '../../types';
import {thresholdCases} from '../../constants';

import {styles} from './asCountryList';

const ASCountryList = ({item}: {item: IApiData}) => {
  const {country, countryInfo, cases} = item;
  const {flag} = countryInfo;
  let iconName = cases > thresholdCases ? 'chevron-up' : 'chevron-down';
  let highlightColor =
    cases > thresholdCases ? COLORS.primary['100'] : COLORS.success['50'];

  return (
    <View style={styles.container}>
      <View style={styles.countryDataContainer}>
        <Image source={{uri: flag}} style={styles.image} />
        <Text style={styles.countryName} numberOfLines={1} ellipsizeMode="tail">
          {country}
        </Text>
      </View>
      <View style={styles.casesDataContainer}>
        <Text style={styles.casesData}>
          {cases > 100000 ? Math.floor(cases / 1000) + ' k' : cases}
        </Text>
        <View style={styles.icon}>
          <Icon
            name={iconName}
            color={highlightColor}
            size={SPACING.space_24}
          />
        </View>
      </View>
    </View>
  );
};

export default ASCountryList;
