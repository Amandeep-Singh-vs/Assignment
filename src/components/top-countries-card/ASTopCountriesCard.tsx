import React from 'react';
import {View, Text} from 'react-native';
import {Circle} from 'react-native-progress';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from '../top-countries-card/asTopCountriesCard-styles';
import {COLORS, SPACING} from '../../theme';

const ASTopCountriesCard = (props: any) => {
  const {country, cases, recovered} = props;
  return (
    <View style={styles.container}>
      <Circle
        size={SPACING.space_62}
        progress={recovered / (cases * 10)}
        unfilledColor={COLORS.neutral['700']}
        thickness={SPACING.space_4}
        strokeCap="round"
        borderColor="white"
        color="red"
        showsText={true}
        formatText={() => `${Math.floor((100 * recovered) / (cases * 10))}%`}
        style={styles.progressContainer}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.detailContainerTitle}>{country}</Text>
        <View style={styles.detailSubContainer}>
          <Text style={styles.detailSubContainerTitle}>
            Affected - {cases / 1000}k
          </Text>
          <Text style={styles.detailSubContainerTitle}>
            Recovered - {recovered / 1000}k
          </Text>
        </View>
      </View>
      <Icon
        name="bell"
        size={SPACING.space_16}
        color="red"
        style={styles.containerImage}
      />
    </View>
  );
};

export default ASTopCountriesCard;
