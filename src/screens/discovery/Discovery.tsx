import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import WebView from 'react-native-webview';

import ASHeader from '../../components/header/ASHeader';
import {WEBVIEW_DISCOVERY_SCREEN_URI} from '../../constants/common-constants';
import {COLORS, SPACING} from '../../theme';

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
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              size={SPACING.space_50}
              color={COLORS.primary['100']}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Discovery;
