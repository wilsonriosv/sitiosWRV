// /screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'; // Nueva importación

export default function HomeScreen() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        Geolocation.requestAuthorization(); // Pide autorización para usar la ubicación

        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            },
            (error) => {
                console.error(error); // Maneja errores, por ejemplo, si se niega el permiso
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={location} // Aquí usas la ubicación obtenida
                >
                    <Marker coordinate={location} /> {/* Muestra el marcador en la ubicación actual */}
                </MapView>
            ) : (
                <Text>Cargando mapa...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
