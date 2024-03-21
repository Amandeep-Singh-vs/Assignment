import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigator} from './src/navigators';
import {COLORS, SPACING} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
  },
});

export default App;
