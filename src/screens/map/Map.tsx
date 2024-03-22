import React from 'react';
import {ScrollView, View} from 'react-native';

import ASHeader from '../../components/header/ASHeader';
import ASMapCard from '../../components/map-card/ASMapCard';
import ASTopCountriesList from '../../components/top-countries-list/ASTopCountriesList';

import {styles} from './map-styles';

const Map = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="World Wide map" />
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        <ASMapCard />
        <ASTopCountriesList />
      </ScrollView>
    </View>
  );
};

export default Map;
