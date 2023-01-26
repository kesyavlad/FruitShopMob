import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './Home';

import SvgHome from '../components/SvgComponents/SvgHome';
import SvgBell from '../components/SvgComponents/SvgBell';
import SvgPlus from '../components/SvgComponents/SvgPlus';
import SvgShopingCart from '../components/SvgComponents/SvgShopingCart';
import SvgSettings from '../components/SvgComponents/SvgSettings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from './Shop';
import Ring from './Ring';
import Settings from './Settings';
import Add from './Add';

const Tab = createBottomTabNavigator();
const MainMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'none',
        headerShown: false,
        tabBarStyle: {
          height: 90,
          shadowColor: 'rgba(0, 0, 0, 0.40)',
          shadowOpacity: 1,
          shadowRadius: 7,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgHome stroke={focused ? '#F1C40F' : 'silver'} />
          ),
        }}
      />
      <Tab.Screen
        name="bell"
        component={Ring}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgBell stroke={focused ? '#F1C40F' : 'silver'} />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={Add}
        options={{
          tabBarIcon: () => <SvgPlus style={styles.plus} />,
        }}
      />
      <Tab.Screen
        name="shopingCart"
        component={Shop}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgShopingCart stroke={focused ? '#F1C40F' : 'silver'} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgSettings stroke={focused ? '#F1C40F' : 'silver'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  plus: {
    bottom: 15,
  },
});

export default MainMenu;
