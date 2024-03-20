import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ASHeader from '../../components/header/ASHeader';
import {getDataFromURL} from '../../services';
import {API_BASE_URL} from '../../constants/common-constants';
import {COLORS, SPACING} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './home-styles';
import {ASCountryList} from '../../components';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState<number>(1);
  const LIMIT = 5;
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
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  const renderFunction = item => {
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
            <TouchableOpacity style={[styles.button]} onPress={handlePrevious}>
              <Icon
                name="chevron-left"
                size={SPACING.space_10}
                // color={page == 1 ? COLORS.shark['10'] : COLORS.neutral[600]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Icon
                name="chevron-right"
                size={SPACING.space_10}
                color={COLORS.neutral[600]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={paginatedData}
          renderItem={({item}) => renderFunction(item)}
        />
      </View>
    </View>
  );
};

export default Home;
