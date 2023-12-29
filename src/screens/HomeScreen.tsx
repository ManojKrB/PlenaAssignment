import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../components/HomeScreen/Header';
import CardSlider from '../components/HomeScreen/CardSlider';
import ProductList from '../components/HomeScreen/ProductList';
import BottomTabs from '../components/HomeScreen/BottomTabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../App';

type propTypes = NativeStackScreenProps<stackScreens, 'Home'>;

const HomeScreen = (props: propTypes) => {
  return (
    <View style={styles.homeScreenContainer}>
      <Header props={props} />
      <CardSlider />
      <ProductList props={props} />
      <BottomTabs />
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
