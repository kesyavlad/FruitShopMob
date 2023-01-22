import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderText from '../../components/HeaderText';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';

const CreatAccaunt = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputKonfirmationPassword, setInputKonfirmationPassword] =
    useState('');

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.boxInput}>
        <View style={styles.CreateAcc}>
          <HeaderText title={'Create Account'} />
        </View>
        <Input
          placeholder="Email"
          confidential={false}
          input={inputEmail}
          setInput={setInputEmail}
        />
        <Input
          placeholder="Password"
          confidential={true}
          input={inputPassword}
          setInput={setInputPassword}
        />
        <Input
          placeholder="Konfirmation Password"
          confidential={true}
          input={inputKonfirmationPassword}
          setInput={setInputKonfirmationPassword}
        />
      </View>
      <CustomButton title={'Sign Up'} />
      <Button title="Sign up menu" color="#F1C40F" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '15%',
  },
  boxInput: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
  },
  CreateAcc: {
    paddingBottom: 30,
  },
});
export default CreatAccaunt;
