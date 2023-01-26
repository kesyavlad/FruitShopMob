import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../pages/SignIn';
import Information from '../pages/Information';
import MainMenu from '../pages/MainMenu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
          <HomeStack.Screen name="SignIn" component={SignIn} />
          <HomeStack.Screen name="Information" component={Information} />
          <HomeStack.Screen name="MainMenu" component={MainMenu} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
