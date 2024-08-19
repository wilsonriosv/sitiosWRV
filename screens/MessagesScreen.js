import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido al Messages</Text>
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

export default MessagesScreen;
