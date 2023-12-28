import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopBar = () => {
  return (
    <View style={styles.iconsContainer}>
      <View>
        <Image
          source={require('../../../assets/images/back-icon.png')}
          style={styles.backIcon}
        />
      </View>
      <View>
        <Text style={styles.shoppingCartText}>Shopping Cart (5)</Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  iconsContainer: {
    width: '90%' || 339,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
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
  shoppingCartText: {
    width: 143,
    height: 24,
    marginLeft: 25,
    marginTop: 10,
  },
});
