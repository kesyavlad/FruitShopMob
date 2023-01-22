import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import HeaderText from './HeaderText';

const CustomSwiper = () => {
  return (
    <Swiper
      activeDot={<View style={styles.activeDot}></View>}
      dot={<View style={styles.dot}></View>}>
      <SafeAreaView style={styles.slide}>
        <Image source={require('../assets/image/Apple.png')} />
        <HeaderText title={'Best Shop Fruit'} />
        <Text style={styles.title}>
          sell and buy fruit from different places
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.slide}>
        <Image source={require('../assets/image/Fruit.png')} />
        <HeaderText title={'Best Shop Fruit'} />
        <Text style={styles.title}>get fresh and healthy fruit for you</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.slide}>
        <Image source={require('../assets/image/Mix.png')} />
        <HeaderText title={'Best Shop Fruit'} />
        <Text style={styles.title}>
          organic fruit that can be enjoyed by everyone
        </Text>
      </SafeAreaView>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: '#F1C40F',
    width: 16,
    height: 16,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 16,
    height: 16,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    width: 152,
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 32,
    paddingBottom: 99,
  },
  swiper: {
    width: 440,
  },
  nextButton: {
    justifyContent: 'center',
    color: '#F1C40F',
    fontSize: 20,
  },
});

export default CustomSwiper;
