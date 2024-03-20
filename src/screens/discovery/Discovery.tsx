import React from 'react';
import {View} from 'react-native';
import ASHeader from '../../components/header/ASHeader';
import WebView from 'react-native-webview';
import {WEBVIEW_DISCOVERY_SCREEN_URI} from '../../constants/common-constants';

const Discovery = () => {
  return (
    <View style={{flex: 1}}>
      <ASHeader title="Discovery" />
      <View style={{flex: 1}}>
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
