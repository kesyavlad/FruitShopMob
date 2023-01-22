import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface InterfaceButton {
  title: string;
  func?: any;
}
const CustomButton: FC<InterfaceButton> = ({title, func}) => {
  return (
    <View>
      <TouchableOpacity style={styles.appButtonContainer} onPress={func}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#F1C40F',
    borderRadius: 30,
    width: 354,
  },
  appButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    fontWeight: 'bold',
  },
});
export default CustomButton;
