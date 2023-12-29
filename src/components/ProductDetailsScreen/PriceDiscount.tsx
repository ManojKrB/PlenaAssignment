import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PriceDiscountProps {
  price: number;
  discount: number;
}

const PriceDiscount: React.FC<PriceDiscountProps> = ({price, discount}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View style={styles.discountContainer}>
        <Text style={styles.discount}>{discount}% OFF</Text>
      </View>
    </View>
  );
};

export default PriceDiscount;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 24,
    width: 178,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    width: 80,
    height: 24,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  discountContainer: {
    backgroundColor: '#2A4BA0',
    borderRadius: 70,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  discount: {
    width: 64,
    height: 16,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#FAFBFD',
  },
});
