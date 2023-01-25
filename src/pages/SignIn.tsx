import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.boxInput}>
        <View style={styles.signIn}>
          <HeaderText title={'Sign In'} />
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
        <View>
          <TouchableOpacity style={styles.forgotBox}>
            <Text style={styles.forgotText}> Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton title={'Sign In'} />
      <Button title="Sign in menu" color="#F1C40F" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'space-between',
    paddingTop: '15%',
  },
  boxInput: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
  },
  forgotText: {
    fontSize: 15,
    color: '#C0C0C0',
  },
  forgotBox: {
    width: 166,
    marginTop: 19,
  },
  signIn: {
    paddingBottom: 60,
  },
});

export default SignIn;
