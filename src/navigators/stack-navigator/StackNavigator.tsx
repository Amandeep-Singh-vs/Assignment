import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNativeStackParamsList} from '../../types/navigation-types';

import {OnBoarding, Splash, Login} from '../../screens';
import {TabNavigator} from '..';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootNativeStackParamsList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {<Stack.Screen name="Splash" component={Splash} />}
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
