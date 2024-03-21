import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootNativeStackParamsList} from '../../types/navigation-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Covstats} from '../../assets';

import {styles} from './splash-styles';

const Splash = () => {
  const openApp = async () => {
    const checker = await AsyncStorage.getItem('openFirstTime');
    if (checker) {
      navigation.navigate('Login');
    } else {
      await AsyncStorage.setItem('openFirstTime', 'true');
      navigation.navigate('OnBoarding');
    }
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  useEffect(() => {
    setTimeout(() => {
      openApp();
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Covstats />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <Text style={styles.containerText}>
        © Copyright COVSTATS 2020. All rights reserved
      </Text>
    </View>
  );
};

export default Splash;
