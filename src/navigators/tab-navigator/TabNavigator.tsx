import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../../screens/home/Home';
import Map from '../../screens/map/Map';
import Education from '../../screens/education/Education';
import Discovery from '../../screens/discovery/Discovery';
import News from '../../screens/news/News';
import {COLORS, SPACING} from '../../theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabBarIconOptions = (title: string) => {
    return {
      tabBarIcon: ({focused}: {focused: Boolean}) => (
        <View>
          <Icon
            name={title}
            size={SPACING.space_28}
            color={focused ? COLORS.primary['50'] : COLORS.neutral['100']}
          />
        </View>
      ),
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary['50'],
        tabBarInactiveTintColor: COLORS.neutral['50'],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={tabBarIconOptions('home')}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={tabBarIconOptions('map')}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={tabBarIconOptions('user')}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={tabBarIconOptions('map-pin')}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={tabBarIconOptions('book-open')}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
