import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener instalado react-native-vector-icons
import HeaderRightButton from '../components/HeaderRightButton';

const HomeScreen = ({ navigation }) => {  // Agrega 'navigation' como argumento
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightButton,
    });

    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            },
            (error) => console.log(error),
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
          );
        } else {
          console.log('Permiso de ubicación denegado');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={location}
        >
          <Marker coordinate={location} title={'Tu ubicación'} />
        </MapView>
      ) : (
        <Text>Cargando mapa...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeScreen;
