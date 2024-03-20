import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './asHeader-styles';
import Icon from 'react-native-vector-icons/Feather';
import {SPACING} from '../../theme';

/** TopAppBar: {This function displays the navbar and changes the title according to the props.title} */
interface IProps {
  title: string;
}
const ASHeader = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={SPACING.space_28} />
      <Text style={styles.txt}>{props.title}</Text>
      <Icon name="user-check" size={SPACING.space_28} />
    </View>
  );
};

export default ASHeader;
