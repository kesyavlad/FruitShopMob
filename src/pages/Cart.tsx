import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
const Cart = () => {
  const route = useRoute();
  const {img, price, counter, fruitName} = route.params;
  const deliveryPrice = 7.51;
  const result = price * counter;
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.boxCard}>
        <Image source={img} style={styles.image} />
        <View style={styles.boxPrice}>
          <Text>{counter} Kg</Text>
          <Text>${price} US</Text>
        </View>
      </View>
      <View>
        <View style={styles.boxTotal}>
          <Text>{fruitName}</Text>
          <Text>${result} US</Text>
        </View>
        <View style={styles.boxTotal}>
          <Text>Delivery</Text>
          <Text>${deliveryPrice} US</Text>
        </View>
        <View style={styles.boxTotal}>
          <Text>Total</Text>
          <Text> ${result + deliveryPrice} US</Text>
        </View>
      </View>
      <CustomButton title={'Checkout'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'column',
  },
  image: {
    width: 82,
    height: 82,
    marginTop: 20,
  },
  boxCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 450,
  },
  boxPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  boxTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Cart;
