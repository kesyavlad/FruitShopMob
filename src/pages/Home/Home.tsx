import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from '../../components/Card';
import {Fruits} from '../../assets/infoFruit/Fruts';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/image/Logo.png')}
            style={styles.image}
          />
          <Text style={styles.textHeader}>BestFruitShop</Text>
        </View>
        <Image source={require('../../assets/image/User.png')} />
      </View>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#C0C0C0"
        style={styles.input}
      />
      <ScrollView>
        <View style={styles.test}>
          {Fruits.map(fruit => (
            <Card
              key={fruit.id}
              img={fruit.image}
              name={fruit.name}
              price={fruit.price}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30,
    marginRight: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    marginBottom: 19,
  },
  textHeader: {
    fontSize: 20,
    color: '#34495E',
    marginTop: 10,
  },
  image: {
    width: 38,
    height: 38,
    fontWeight: 600,
  },
  input: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 3, height: 7},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: 62,
    paddingTop: 13,
    paddingBottom: 14,
  },
  test: {
    width: '110%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
