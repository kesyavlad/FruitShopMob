import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SvgBack from '../components/SvgComponents/SvgBack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardShop from '../components/CardShop';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Shop = () => {
  const route = useRoute();
  const {img, fruitName, price} = route.params;
  return (
    <Stack.Navigator>
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
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 30,
    marginRight: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#F1C40F',
    fontWeight: '700',
    fontSize: 22,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '80%',
  },
  image: {
    width: 258,
    height: 258,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  imageSize: {
    width: '100%',
  },
});

export default Shop;
