import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface InterfaceText {
  title: string;
}
const HeaderText: FC<InterfaceText> = ({title}) => {
  return <Text style={styles.text}>{title}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
  },
});
export default HeaderText;
