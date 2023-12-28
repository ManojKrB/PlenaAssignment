import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ItemContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/product-image-black.png')}
          style={styles.productImage}
        />
      </View>
      <View style={styles.namePriceContainer}>
        <Text style={styles.name}>Bananas</Text>
        <Text style={styles.price}>$7.90</Text>
      </View>
      <View style={styles.quantityContainer}>
        <View>
          <Image
            source={require('../../../assets/images/decrement.png')}
            style={styles.decrementIcon}
          />
        </View>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>1</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/increment.png')}
            style={styles.decrementIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemContainer;

const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    width: '90%' || 325,
    height: 42,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  productImage: {
    height: 30,
    width: 30,
  },
  namePriceContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  name: {
    width: 57,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#1E222B',
  },
  price: {
    width: 36,
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E222B',
  },
  quantityContainer: {
    width: 110,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
    flex: 1,
  },
  decrementIcon: {
    width: 40,
    height: 40,
  },
  quantity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    width: 6,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#1E222B',
    marginHorizontal: 11,
  },
});