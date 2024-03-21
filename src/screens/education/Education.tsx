import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

import ASHeader from '../../components/header/ASHeader';
import {WEBVIEW_EDUCATION_SCREEN_URI} from '../../constants/common-constants';

import {styles} from './education-styles';

const Education = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="Education" />
      <View style={styles.subContainer}>
        <WebView
          source={{
            uri: WEBVIEW_EDUCATION_SCREEN_URI,
          }}
        />
      </View>
    </View>
  );
};

export default Education;
