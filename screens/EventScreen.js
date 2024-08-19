import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido al Event</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventScreen;
