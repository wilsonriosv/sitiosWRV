// /screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    }, [navigation]);  // Agrega 'navigation' al arreglo de dependencias

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
