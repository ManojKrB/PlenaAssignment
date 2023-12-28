import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IconsContainer = () => {
  return (
    <View style={styles.iconsContainer}>
      <View>
        <Image
          source={require('../../../assets/images/back-icon.png')}
          style={styles.backIcon}
        />
      </View>
      <View>
        <Image
          source={require('../../../assets/images/cart-icon-black.png')}
          style={styles.cartIcon}
        />
      </View>
    </View>
  );
};

export default IconsContainer;

const styles = StyleSheet.create({
  iconsContainer: {
    width: '90%' || 339,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 45,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  cartIcon: {
    height: 24,
    width: 24,
    marginTop: 2,
  },
});
