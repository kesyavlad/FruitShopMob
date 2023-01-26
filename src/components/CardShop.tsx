import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from './CustomButton';
import SvgDown from './SvgComponents/SvgDown';
import SvgUp from './SvgComponents/SvgUp';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {backToOne, decrement, increment} from '../Redux/counterSlice';
interface card {
  fruitName: string;
  price: string;
  img: string;
}

const CardShop: FC<card> = ({fruitName, price, img}) => {
  const navigation = useNavigation();
  const count = useAppSelector(state => state.counter.value);
  const weight = count;
  const dispatch = useAppDispatch();
  const addFruit = () => {
    navigation.navigate('Cart', {
      weight,
      price,
      img,
      fruitName,
    });
    dispatch(backToOne(1));
  };
  return (
    <SafeAreaView style={styles.content}>
      {fruitName ? (
        <>
          <View style={styles.imageBox}>
            <View style={styles.image}>
              <Image source={img} style={styles.image} />
            </View>
            <Text style={styles.name}>{fruitName}</Text>
            <View style={styles.boxKg}>
              <TouchableOpacity onPress={() => dispatch(decrement())}>
                <SvgDown />
              </TouchableOpacity>
              <Text style={styles.textKg}>{count} kg</Text>
              <TouchableOpacity onPress={() => dispatch(increment())}>
                <SvgUp />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${price} US</Text>
          </View>
          <CustomButton title={'Add Cart'} func={addFruit} />
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  price: {
    color: '#F1C40F',
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 400,
  },
  image: {
    width: 258,
    height: 258,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  boxKg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(192, 192, 192, 0.35)',
    borderRadius: 20,
  },
  textKg: {
    color: '#F1C40F',
    fontSize: 15,
  },
});

export default CardShop;
