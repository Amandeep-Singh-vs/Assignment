import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

import ASHeader from '../../components/header/ASHeader';
import {WEBVIEW_NEWS_SCREEN_URI} from '../../constants/common-constants';

import {styles} from './news-styles';

const News = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="News" />
      <View style={styles.subContainer}>
        <WebView
          source={{
            uri: WEBVIEW_NEWS_SCREEN_URI,
          }}
        />
      </View>
    </View>
  );
};

export default News;
