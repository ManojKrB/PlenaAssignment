import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceDistributionContainer}>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>$35.96</Text>
        </View>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Delivery</Text>
          <Text style={styles.subtotalPrice}>$2.00</Text>
        </View>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Total</Text>
          <Text style={styles.subtotalPrice}>$37.96</Text>
        </View>
      </View>
      <View style={styles.proceedContainer}>
        <Text style={styles.proceedText}>Proceed To checkout</Text>
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  container: {
    height: 266,
    width: '90%' || 359,
    display: 'flex',
    alignSelf: 'center',
    marginTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#F8F9FB',
  },
  priceDistributionContainer: {},
  subtotalContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 32,
  },
  subtotalText: {
    width: 56,
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#616A7D',
  },
  subtotalPrice: {
    width: 46,
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E222B',
  },
  proceedContainer: {
    width: '90%' || 327,
    height: 56,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    backgroundColor: '#2A4BA0',
    borderRadius: 20,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  proceedText: {
    width: 143,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '600',
    lineHeight: 19.12,
    color: '#FFFFFF',
  },
});
