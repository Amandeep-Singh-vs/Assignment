import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Text, View} from 'react-native';

import ASTopCountriesCard from '../top-countries-card/ASTopCountriesCard';
import {getDataFromURL} from '../../services';
import {IApiData as ITopCountriesCardProps} from '../../types';
import {API_BASE_URL} from '../../constants';
import {COLORS, SPACING} from '../../theme';

import {styles} from './asTopCountriesList-styles';

const ASTopCountriesList = () => {
  const [apiData, setApiData] = useState<ITopCountriesCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getApiData = async () => {
    const result = await getDataFromURL(API_BASE_URL);
    if (result.success) {
      setApiData(result.data);
      setIsLoading(false);
    } else {
      Alert.alert('Something went wrong!!!');
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  const topTenCountries = apiData.slice(0, 10);
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
          keyExtractor={item => item.countryInfo._id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ASTopCountriesCard {...item} />}
        />
      )}
    </View>
  );
};

export default ASTopCountriesList;
