import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {SPACING} from '../../theme';

import {styles} from './asHeader-styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNativeStackParamsList} from '../../types/navigation-types';

interface IProps {
  title: string;
}

const ASHeader = (props: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  return (
    <View style={styles.container}>
      <Icon name="menu" size={SPACING.space_20} style={styles.icon} />
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon name="user-check" size={SPACING.space_20} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ASHeader;
