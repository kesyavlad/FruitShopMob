import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SvgBack from '../components/SvgComponents/SvgBack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardShop from '../components/CardShop';
import {useRoute} from '@react-navigation/native';
import Cart from './Cart';
import SvgBigSearch from '../components/SvgComponents/SvgBigSearch';

const Stack = createNativeStackNavigator();

const Shop = () => {
  const route = useRoute();
  const {img, fruitName, price} = route.params || '';
  return (
    <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: '#fff'}}}>
      <Stack.Screen
        name="CardShop"
        children={() => (
          <CardShop fruitName={fruitName} price={price} img={img} />
        )}
        options={({navigation}) => ({
          headerTitle: () => <Text style={styles.headerText}>Shop</Text>,
          headerLeft: () => (
            <SvgBack
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => <SvgBigSearch />,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => ({
          headerTitle: () => <Text style={styles.headerText}>Cart</Text>,
          headerLeft: () => (
            <SvgBack
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => <SvgBigSearch />,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#F1C40F',
    fontWeight: '700',
    fontSize: 22,
  },
});

export default Shop;
