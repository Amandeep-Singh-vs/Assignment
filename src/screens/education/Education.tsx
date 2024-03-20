import React from 'react';
import { View} from 'react-native';
import ASHeader from '../../components/header/ASHeader';
import WebView from 'react-native-webview';
import {WEBVIEW_EDUCATION_SCREEN_URI} from '../../constants/common-constants';

const Education = () => {
  return (
    <View style={{flex: 1}}>
      <ASHeader title="Education" />
      <View style={{flex: 1}}>
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
