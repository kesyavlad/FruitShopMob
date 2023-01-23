import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SvgBack from '../components/SvgComponents/SvgBack';
import SvgSearch from '../components/SvgComponents/SvgSearch';
import CustomButton from '../components/CustomButton';

interface ShopInterface {
  img: string;
  name: string;
  price: string;
}

const Shop: FC<ShopInterface> = ({img, name, price}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SvgBack />
        <Text style={styles.headerText}>Shop</Text>
        <SvgSearch />
      </View>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={require('../assets/image/Apple.png')}
            style={styles.imageSize}
          />
        </View>
        <Text>{name}</Text>
        <Text>${price} US</Text>
      </View>
      <CustomButton title={'Add to Card'} />
    </SafeAreaView>
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
