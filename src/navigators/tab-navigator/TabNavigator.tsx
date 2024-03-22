import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/home/Home';
import Map from '../../screens/map/Map';
import Education from '../../screens/education/Education';
import Discovery from '../../screens/discovery/Discovery';
import News from '../../screens/news/News';
import {COLORS, SPACING} from '../../theme';

import {
  HomeIcon,
  MapIcon,
  DiscoveryIcon,
  NewsIcon,
  UserIcon,
  ActiveHome,
  ActiveMap,
  ActiveEducation,
  ActiveDiscovery,
  ActiveNews,
} from '../../assets';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const getTabIconSVG = (title: string, focused: boolean) => {
    let TabBarIconSvg;
    switch (title) {
      case 'Home':
        TabBarIconSvg = !focused ? <HomeIcon /> : <ActiveHome />;
        break;
      case 'Map':
        TabBarIconSvg = !focused ? <MapIcon /> : <ActiveMap />;
        break;
      case 'Education':
        TabBarIconSvg = !focused ? <UserIcon /> : <ActiveEducation />;
        break;
      case 'Discovery':
        TabBarIconSvg = !focused ? <DiscoveryIcon /> : <ActiveDiscovery />;
        break;
      case 'News':
        TabBarIconSvg = !focused ? <NewsIcon /> : <ActiveNews />;
        break;
    }
    return TabBarIconSvg;
  };
  const tabBarIconOptions = (title: string) => {
    return {
      tabBarIcon: ({focused}: {focused: boolean}) => {
        return getTabIconSVG(title, focused);
      },
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary['50'],
        tabBarInactiveTintColor: COLORS.neutral['50'],
        tabBarLabelStyle: {
          fontSize: SPACING.space_12,
          lineHeight: SPACING.space_12,
        },
        tabBarStyle: {
          height: SPACING.space_62,
          paddingBottom: SPACING.space_10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={tabBarIconOptions('Home')}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={tabBarIconOptions('Map')}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={tabBarIconOptions('Education')}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={tabBarIconOptions('Discovery')}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={tabBarIconOptions('News')}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
