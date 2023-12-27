import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <View></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  headerContainer: {
    height: 252,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    backgroundColor: '#2A4BA0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
