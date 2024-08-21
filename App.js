import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Encapsulamos onAuthStateChanged en useCallback para evitar problemas de dependencias
  const onAuthStateChanged = useCallback((user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }, [initializing]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    SplashScreen.hide();
    return subscriber; // Se desuscribe al desmontar el componente
  }, [onAuthStateChanged]); // Incluimos onAuthStateChanged en las dependencias para evitar el warning

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <HomeScreen /> : <LoginScreen />;
};

export default App;

