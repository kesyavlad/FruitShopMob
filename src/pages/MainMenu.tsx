import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SignIn from './SignIn/SignIn';
import Home from './Home/Home';

const Tab = createMaterialBottomTabNavigator();
const MainMenu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/image/Apple.png')} //to constant
                style={styles.image}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Characters"
          component={SignIn}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/image/Mix.png')} //to constant
                style={styles.image}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  centerImage: {
    width: 55,
    height: 55,
    borderRadius: 25,
    marginBottom: 20,
    borderColor: 'green',
    borderWidth: 1,
  },
});

export default MainMenu;
