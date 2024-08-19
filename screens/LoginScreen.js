import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(verificationCode);
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async (userId, email, name, age, interests) => {
    await firebase.firestore().collection('users').doc(userId).set({
      email,
      name,
      age,
      interests,
    });
  };

  return (
    <View>
      <TextInput placeholder="Número de Teléfono" onChangeText={setPhoneNumber} />
      <Button title="Enviar Código" onPress={signInWithPhoneNumber} />
      {confirm && (
        <>
          <TextInput placeholder="Código de Verificación" onChangeText={setVerificationCode} />
          <Button title="Verificar" onPress={confirmCode} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
