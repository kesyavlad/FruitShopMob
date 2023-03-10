import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from '../components/CardFruit';
import {Fruits} from '../assets/infoFruit/Fruts';
import SvgSearch from '../components/SvgComponents/SvgSearch';
const Home = () => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={styles.colorWindow}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('../assets/image/Logo.png')}
              style={styles.image}
            />
            <Text style={styles.textHeader}>BestFruitShop</Text>
          </View>
          <Image source={require('../assets/image/User.png')} />
        </View>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#C0C0C0"
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            onChangeText={newText => setInput(newText)}
          />
          <SvgSearch style={styles.svg} width={25} height={25} />
        </View>
        <ScrollView>
          <View style={styles.list}>
            {Fruits.filter(fruit =>
              fruit.name.toLowerCase().includes(input.toLowerCase()),
            ).map(fruit => (
              <Card
                key={fruit.id}
                id={fruit.id}
                img={fruit.image}
                name={fruit.name}
                price={fruit.price}
              />
            ))}
          </View>
        </ScrollView>
      </View>
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
    width: '100%',
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
    paddingRight: 50,
  },
  list: {
    width: '110%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svg: {
    marginLeft: -50,
  },
  colorWindow: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default Home;
