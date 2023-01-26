import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import SvgEdit from '../components/SvgComponents/SvgEdit';
import SvgTrash from '../components/SvgComponents/SvgTrash';
const Cart = () => {
  const route = useRoute();
  const {img, price, counter, fruitName} = route.params;
  const deliveryPrice = 7.51;
  const result = price * counter;
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.box}>
        <View style={styles.boxCard}>
          <Image source={img} style={styles.image} />
          <View style={styles.boxPrice}>
            <Text>{counter} Kg</Text>
            <Text>${price} US</Text>
          </View>
        </View>
        <View style={styles.changeBox}>
          <TouchableOpacity>
            <SvgEdit />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgTrash />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.check}>
          <Text>{fruitName}</Text>
          <Text>${result} US</Text>
        </View>
        <View style={styles.check}>
          <Text>Delivery</Text>
          <Text>${deliveryPrice} US</Text>
        </View>
        <View style={styles.boxTotal}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}> ${result + deliveryPrice} US</Text>
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
    alignItems: 'center',
  },
  boxPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 44,
  },
  changeBox: {
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
    height: 81,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'column',
    height: 430,
  },
  totalText: {
    fontSize: 22,
  },
});
export default Cart;
