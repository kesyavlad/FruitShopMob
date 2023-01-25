import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface CardFruit {
  id?: number;
  img: string;
  name: string;
  price: string;
}

const Card: FC<CardFruit> = ({img, name, price}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('shopingCart', {
          img,
          fruitName: name,
          price: price,
        })
      }>
      <Image source={img} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.price}>${price} US</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '40%',
    height: 167,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    top: 20,
    marginBottom: -10,
  },
  textName: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: '300',
  },
  description: {
    alignItems: 'center',
  },
});

export default Card;
