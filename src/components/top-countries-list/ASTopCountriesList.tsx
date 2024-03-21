import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import ASTopCountriesCard from '../top-countries-card/ASTopCountriesCard';
import {getDataFromURL} from '../../services';
import {API_BASE_URL} from '../../constants/common-constants';
import {COLORS, SPACING} from '../../theme';

import {styles} from './asTopCountriesList-styles';

const ASTopCountriesList = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getApiData = async () => {
    const result = await getDataFromURL(API_BASE_URL);
    if (result.success) {
      setApiData(result.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  const topTenCountries = apiData.sort((a, b) => a - b).slice(0, 7);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Countries</Text>
      {isLoading ? (
        <ActivityIndicator
          size={SPACING.space_50}
          color={COLORS.primary['100']}
        />
      ) : (
        <FlatList
          data={topTenCountries}
          scrollEnabled
          keyExtractor={(item: any) => item.countryInfo._id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ASTopCountriesCard {...item} />}
        />
      )}
    </View>
  );
};

export default ASTopCountriesList;
