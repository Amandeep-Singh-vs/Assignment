import React from 'react';
import {View} from 'react-native';
import ASHeader from '../../components/header/ASHeader';
import ASMapCard from '../../components/map-card/ASMapCard';
import ASTopCountriesList from '../../components/top-countries-list/ASTopCountriesList';
import {styles} from './map-styles';

const Map = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="World Wide map" />
      <View style={styles.subContainer}>
        <ASMapCard />
        <ASTopCountriesList />
      </View>
    </View>
  );
};

export default Map;
