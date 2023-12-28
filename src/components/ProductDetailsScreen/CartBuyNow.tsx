import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CartBuyNow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addToCartContainer}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </View>
      <View style={styles.buyNowContainer}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </View>
    </View>
  );
};

export default CartBuyNow;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '90%' || 335,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
  },
  addToCartContainer: {
    width: 143,
    height: 56,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    width: 80,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#2A4BA0',
  },
  buyNowContainer: {
    width: 169,
    height: 56,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A4BA0',
  },
  buyNowText: {
    width: 58,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#FFFFFF',
  },
});
