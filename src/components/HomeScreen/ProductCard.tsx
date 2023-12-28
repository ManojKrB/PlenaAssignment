import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconsContainer}>
        <View>
          <Image
            source={require('../../../assets/images/wishlist-icon.png')}
            style={styles.wishlistIcon}
          />
        </View>
        <View>
          <Image
            source={require('../../../assets/images/product-image.png')}
            style={styles.productIcon}
          />
        </View>
      </View>
      <View style={styles.productDescriptionContainer}>
        <View style={styles.productDescription}>
          <Text style={styles.price}>$325</Text>
          <Text style={styles.name}>Clown Tang.H03</Text>
        </View>
        <View style={styles.addIconContainer}>
          <Image
            source={require('../../../assets/images/add-icon.png')}
            style={styles.addIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 194,
    borderRadius: 12,
    backgroundColor: '#F8F9FB',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  iconsContainer: {
    height: 80,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  wishlistIcon: {
    width: 14.55,
    height: 13.35,
    margin: 10,
  },
  productIcon: {
    height: 68,
    width: 68,
    marginTop: 10,
    marginLeft: 10,
  },
  productDescriptionContainer: {
    width: 128,
    height: 84,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  productDescription: {
    width: '90%',
    height: '100%',
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  addIconContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  price: {
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E222B',
  },
  name: {
    width: 112,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#616A7D',
  },
  addIcon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
});
