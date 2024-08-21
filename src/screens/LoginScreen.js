import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  // Estados para manejar la entrada de email/password y teléfono/código de verificación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  // Función para iniciar sesión con email y password
  const signInWithEmail = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Inicio de sesión exitoso con email!');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Error en el inicio de sesión con email, por favor verifica tus credenciales.');
    }
  };

  // Función para enviar el código de verificación al número de teléfono
  const signInWithPhoneNumber = async () => {
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmation(confirmationResult);
      Alert.alert('Código de verificación enviado!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error al enviar el código de verificación.');
    }
  };

  // Función para confirmar el código de verificación
  const confirmCode = async () => {
    try {
      await confirmation.confirm(code);
      Alert.alert('Autenticación exitosa con teléfono!');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Código incorrecto, por favor intenta nuevamente.');
    }
  };

  return (
    <View>
      {/* Inicio de sesión con email y password */}
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar sesión con Email" onPress={signInWithEmail} />

      {/* Inicio de sesión con número de teléfono */}
      <TextInput
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Button title="Enviar código de verificación" onPress={signInWithPhoneNumber} />

      {confirmation && (
        <>
          <TextInput
            placeholder="Código de verificación"
            value={code}
            onChangeText={(text) => setCode(text)}
            keyboardType="number-pad"
          />
          <Button title="Confirmar código" onPress={confirmCode} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
