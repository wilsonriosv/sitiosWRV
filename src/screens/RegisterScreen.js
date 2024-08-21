import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({ navigation }) => {
  // Estados para almacenar los datos del usuario
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState('');

  // Función para registrar al usuario
  const handleRegister = async () => {
    if (!fullName || !email || !password || !phoneNumber || !age || !interests) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      // Crear cuenta de usuario en Firebase Authentication
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Guardar la información adicional en Firestore
      await firestore().collection('users').doc(user.uid).set({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        age: parseInt(age, 10),
        interests: interests,
      });

      Alert.alert('Registro Exitoso', 'Te has registrado correctamente.');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Intereses"
        value={interests}
        onChangeText={setInterests}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
