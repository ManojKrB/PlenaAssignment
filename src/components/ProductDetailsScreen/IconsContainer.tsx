import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface IconsContainerProps {
  props: any;
}

const IconsContainer: React.FC<IconsContainerProps> = ({props}) => {
  const {navigation} = props;
  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../../assets/images/back-icon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          source={require('../../../assets/images/cart-icon-black.png')}
          style={styles.cartIcon}
        />
      </TouchableOpacity>
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
