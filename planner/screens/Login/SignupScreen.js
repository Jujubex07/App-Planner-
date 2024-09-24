import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (

    <View style={styles.container}>
    
      <Text style={styles.title}>Cadraste-se no Planner+ </Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        placeholderTextColor="#a3a3a3"
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#a3a3a3"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#a3a3a3"
        secureTextEntry={true} 
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.signupLink}>Voltar para login</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5D4FA',
    padding: 20,
  },

   title: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#7a5ea6',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupLink: {
    color: '#7a5ea6',
    fontWeight: 'bold',
  },
});
