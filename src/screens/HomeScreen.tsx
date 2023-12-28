import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenCardSlider from '../components/HomeScreenCardSlider';
import HomeScreenProductList from '../components/HomeScreenProductList';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <HomeScreenHeader />
      <HomeScreenCardSlider />
      <HomeScreenProductList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    marginTop: 1,
  },
});
