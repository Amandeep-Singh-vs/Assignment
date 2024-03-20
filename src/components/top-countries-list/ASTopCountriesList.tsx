import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import ASTopCountriesCard from '../top-countries-card/ASTopCountriesCard';
import {styles} from './asTopCountriesList-styles';
import {getDataFromURL} from '../../services';
import {API_BASE_URL} from '../../constants/common-constants';

const ASTopCountriesList = () => {
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    const result = await getDataFromURL(API_BASE_URL);
    if (result.success) {
      setApiData(result.data);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  const topThreeCountries = apiData.sort((a, b) => a - b).slice(0, 3);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Countries</Text>
      <FlatList
        data={topThreeCountries}
        scrollEnabled
        keyExtractor={(item: any) => item.countryInfo._id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ASTopCountriesCard {...item} />}
      />
    </View>
  );
};

export default ASTopCountriesList;
