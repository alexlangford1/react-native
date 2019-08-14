import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';


const { width: WIDTH } = Dimensions.get('window')

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shift Trader</Text>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => null}
        style={styles.btn}
      >
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 24,
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 25,
    textAlign: 'left',
  },
  title: {
    fontSize: 35,
    color: "white",
    marginTop: 175
  },
  btn: {
    backgroundColor: 'rebeccapurple',
    width: WIDTH - 250,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
    borderRadius: 24,
    margin: 10,

  }

});
