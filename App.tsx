import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from './src/navigators';
import {Login} from './src/screens';
import {COLORS, SPACING} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [loginScreen, setLoginScreen] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* {!loginScreen && <OnBoarding setLoginScreen={setLoginScreen} />} */}
      {/* {loginScreen && <TabNavigator />} */}
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      {/* <Login /> */}
      {/* <TabNavigator /> */}
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
