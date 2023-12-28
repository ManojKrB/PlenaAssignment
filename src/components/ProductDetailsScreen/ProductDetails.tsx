import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>Details</Text>
      <Text style={styles.productDescription}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo.
      </Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    width: '90%' || 327,
    height: 102,
    marginTop: 30,
    display: 'flex',
    alignSelf: 'center',
  },
  detailsText: {
    width: 52,
    height: 24,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1E222B',
  },
  productDescription: {
    width: 327,
    height: 72,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#8891A5',
  },
});
