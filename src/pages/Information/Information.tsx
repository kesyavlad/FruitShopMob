import React from 'react';
import CustomSwiper from '../../components/CustomSwiper';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Information = () => {
  return (
    <>
      <CustomSwiper />
      <TouchableOpacity style={styles.opacity}>
        <Text style={styles.nextButton}>Next</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  nextButton: {
    alignItems: 'center',
    color: '#F1C40F',
    fontSize: 20,
    width: 47,
  },
  opacity: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 53,
    marginTop: 188,
  },
});
export default Information;
