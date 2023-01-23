import React, {FC} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InterfaceInput {
  confidential: boolean;
  placeholder: string;
  input: string;
  setInput: Function;
}

const Input: FC<InterfaceInput> = ({
  confidential,
  placeholder,
  input,
  setInput,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={confidential}
      placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
      value={input}
      onChangeText={e => {
        setInput(e);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(196,196,196,0.35)',
    borderRadius: 30,
    fontSize: 20,
    paddingVertical: 20,
    paddingLeft: 42,
    width: '100%',
    height: 66,
    marginTop: 36,
  },
});

export default Input;
