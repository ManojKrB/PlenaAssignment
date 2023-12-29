import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

interface TopBarProps {
  props: any;
}

const TopBar: React.FC<TopBarProps> = ({props}) => {
  const {navigation} = props;
  const cartItems = useSelector((state: {cart: any}) => state.cart);
  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../../assets/images/back-icon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.shoppingCartText}>
          Shopping Cart ({cartItems.length})
        </Text>
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
