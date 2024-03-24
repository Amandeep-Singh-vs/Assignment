import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ASHeader from '../../components/header/ASHeader';
import {ASCountryList} from '../../components';
import {getDataFromURL} from '../../services';
import {IApiData} from '../../types';
import {API_BASE_URL, PAGE_LIMIT as LIMIT} from '../../constants';
import {COLORS, SPACING} from '../../theme';

import {styles} from './home-styles';

const Home = () => {
  const [apiData, setApiData] = useState<IApiData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const totalDataLength = apiData.length;
  const startIdx = (page - 1) * LIMIT;
  const endIdx = Math.min(startIdx + Number(LIMIT), totalDataLength);
  const paginatedData = [...apiData].slice(startIdx, endIdx);
  const handlePrevious = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page === Math.ceil(totalDataLength / LIMIT) ? 1 : page + 1);
  };

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
  const renderFunction = (item: IApiData) => {
    return <ASCountryList item={item} />;
  };
  return (
    <View style={styles.container}>
      <ASHeader title="Home" />
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Live Reports</Text>
            <Text style={styles.subTitle}>Top five countries</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePrevious}>
              <Icon name="chevron-left" size={SPACING.space_14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Icon
                name="chevron-right"
                size={SPACING.space_14}
                color={COLORS.neutral['600']}
              />
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator
            size={SPACING.space_50}
            color={COLORS.primary['100']}
          />
        ) : (
          <FlatList
            data={paginatedData}
            renderItem={({item}) => renderFunction(item)}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
