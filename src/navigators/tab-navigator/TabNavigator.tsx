import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../../screens/home/Home';
import Map from '../../screens/map/Map';
import Education from '../../screens/education/Education';
import Discovery from '../../screens/discovery/Discovery';
import News from '../../screens/news/News';

// import {styles} from './tabNavigator-styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabBarIconOptions = title => {
    return {
      tabBarIcon: ({focused}: {focused: Boolean}) => (
        <View>
          <TouchableOpacity>
            <Icon name={title} size={20} color="red" />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
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
    </NavigationContainer>
  );
};

export default TabNavigator;
