import React from 'react';
import {Text, View} from 'react-native';
import {Map} from '../../assets';
import {styles} from './asMapCard-styles';
const ASMapCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COVID - 19 Affected Areas</Text>
      <View style={styles.subContainer}>
        <View style={styles.subContainerLegend1} />
        <Text style={styles.subContainerTitle}>Most Affected</Text>
        <View style={styles.subContainerLegend2} />
        <Text style={styles.subContainerTitle}>Less Affected</Text>
      </View>
      <Map width="100%" height={300} />
    </View>
  );
};

export default ASMapCard;
