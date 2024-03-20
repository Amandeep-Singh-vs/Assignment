import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Covstats} from '../../assets';
import {styles} from './splash-styles';
import {RootNativeStackParamsList} from '../../types/navigation-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Covstats />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <Text style={styles.copyrightText}>
        © Copyright COVSTATS 2020. All rights reserved
      </Text>
    </View>
  );
};

export default Splash;
