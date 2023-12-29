import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ProductDetailsProps {
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>Details</Text>
      <Text style={styles.productDescription}>{description}</Text>
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
