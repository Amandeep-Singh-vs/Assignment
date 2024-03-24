import React from 'react';
import {View, Text} from 'react-native';
import {Circle} from 'react-native-progress';
import Icon from 'react-native-vector-icons/Feather';

import {IApiData as ITopCountriesCardProps} from '../../types';
import {LIMIT} from '../../constants';
import {COLORS, SPACING} from '../../theme';

import {styles} from '../top-countries-card/asTopCountriesCard-styles';

const ASTopCountriesCard = (props: ITopCountriesCardProps) => {
  const {country, cases, recovered} = props;
  const highlightColor =
    cases > LIMIT ? COLORS.primary['100'] : COLORS.success['50'];
  return (
    <View style={styles.container}>
      <Circle
        size={SPACING.space_62}
        progress={recovered / (cases * SPACING.space_10)}
        unfilledColor={COLORS.neutral['700']}
        thickness={SPACING.space_6}
        strokeCap="round"
        borderColor="white"
        color={COLORS.primary['50']}
        showsText={true}
        formatText={() =>
          `${Math.floor((100 * recovered) / (cases * SPACING.space_10))}%`
        }
        style={styles.progressContainer}
        textStyle={styles.progressContainerText}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.detailContainerTitle}>{country}</Text>
        <Text style={styles.detailSubContainerTitle}>
          Affected - {cases / 1000}k
        </Text>
        <Text style={styles.detailSubContainerTitle}>
          Recovered - {recovered / 1000}k
        </Text>
      </View>
      <Icon
        name="bell"
        size={SPACING.space_20}
        color={highlightColor}
        style={styles.containerImage}
      />
    </View>
  );
};

export default ASTopCountriesCard;
