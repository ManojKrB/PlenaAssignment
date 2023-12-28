import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconsContainer from '../components/ProductDetailsScreen/IconsContainer';
import NameRating from '../components/ProductDetailsScreen/NameRating';
import CarouselContainer from '../components/ProductDetailsScreen/CarouselContainer';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.productDetailsContainer}>
      <IconsContainer />
      <NameRating />
      <CarouselContainer />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productDetailsContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
});
