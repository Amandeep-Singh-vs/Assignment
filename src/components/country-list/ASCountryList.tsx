import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import {styles} from './asCountryList';

const ASCountryList = ({item}) => {
  const {country, countryInfo, cases} = item;
  const {flag} = countryInfo;
  const threshold = 50000;
  let iconName = cases > threshold ? 'chevron-up' : 'chevron-down';
  return (
    <View style={styles.container}>
      <View style={styles.countryDataContainer}>
        <Image source={{uri: flag}} style={styles.image} />
        <Text style={styles.countryName}>{country}</Text>
      </View>
      <View style={styles.covidDataContainer}>
        <Text style={styles.covidData}>{cases}</Text>
        <View style={styles.icon}>
          <Icon name={iconName} />
        </View>
      </View>
    </View>
  );
};

export default ASCountryList;
