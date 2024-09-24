import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image 
      source={{ uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f4b59f236a179f837f7bce5c7d91c9c6'}} 
      style={styles.logo}
      resizeMode="cover"
       />
      </View>
      <Text style={styles.title}>Bem-Vindo ao Planner+ </Text>
      <Text style={styles.slogan}>Simplicidade e enfiência na palma da sua mão!</Text>

      <Text style={styles.slogan}></Text>
  
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
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Criar</Text>
        </TouchableOpacity>
      </View>
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
  slogan: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#9642A4',
  },

   logo: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,   
    height: 100,  
    borderRadius: 50,  
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    marginBottom: 20, 
    justifyContent: 'center',
    alignItems: 'center',
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
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#7a5ea6',
    marginVertical: 10,
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
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#333',
  },
  signupLink: {
    color: '#7a5ea6',
    fontWeight: 'bold',
  },
});
