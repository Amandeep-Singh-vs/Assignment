import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

import ASHeader from '../../components/header/ASHeader';
import {WEBVIEW_DISCOVERY_SCREEN_URI} from '../../constants/common-constants';

import {styles} from './discovery-styles';

const Discovery = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="Discovery" />
      <View style={styles.subContainer}>
        <WebView
          source={{
            uri: WEBVIEW_DISCOVERY_SCREEN_URI,
          }}
        />
      </View>
    </View>
  );
};

export default Discovery;
