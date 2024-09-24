import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

// Importação das telas
import SignupScreen from './screens/Login/SignupScreen';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/TelaInicial/HomeScreen';
import AgendaScreen from './screens/Agenda/AgendaScreen';
import CalendarioScreen from './screens/Agenda/CalendarioScreen';
import TaskScreen from './screens/Planner/TaskScreen';
import SettingsScreen from './screens/Configuracoes/Settings';
import PerfilScreen from './screens/Perfil/PerfilScreen';

// Navegadores
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

// Função principal do App
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controle de login

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

// Stack de autenticação (Login e Signup)
function AuthStackScreen() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <AuthStack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ headerShown: false }} 
      />
      <AuthStack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
    </AuthStack.Navigator>
  );
}

// Stack do app após login
function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }} 
      />
      <AppStack.Screen 
        name="Agenda" 
        component={AgendaScreen} 
        options={{ title: 'Agenda' }} 
      />
      <AppStack.Screen 
        name="Plan" 
        component={TaskScreen} 
        options={{ title: 'Planejamento' }} 
      />
      <AppStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Configurações' }} 
      />
      <AppStack.Screen 
        name="Perfil" 
        component={PerfilScreen} 
        options={{ title: 'Perfil' }} 
      />
    </AppStack.Navigator>
  );
}

