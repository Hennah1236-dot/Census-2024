import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Login Component
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} placeholder="Enter Username" />
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
      <Button title="Log In" onPress={() => {}} />
      <TouchableOpacity>
        <Text style={styles.link}>Forget Password?</Text>
      </TouchableOpacity>
      <Text>
        Don’t have an account? Create Account{' '}        
      </Text>
      <Button title="Create Account" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  link: {
    color: 'blue',
  },
  button: {
   color:'orange'
  },
});

export default Login;
