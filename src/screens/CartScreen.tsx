import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/CartScreen/TopBar';
import ItemContainer from '../components/CartScreen/ItemContainer';

import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../App';

type propTypes = NativeStackScreenProps<stackScreens, 'Cart'>;

const CartScreen = (props: propTypes) => {
  const finalProductList = useSelector(
    (state: {product: any}) => state.product,
  );

  const cartItems = useSelector((state: {cart: any}) => state.cart);

  const getTotal = () => {
    let total = 0;
    cartItems?.map((item: {quantity: number; price: number}) => {
      total = total + item.quantity * item.price;
    });
    return total;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TopBar props={props} />
        <View style={{marginTop: 40}}>
          {cartItems &&
            cartItems?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <ItemContainer item={item} />
                <View style={styles.lineBreak} />
              </React.Fragment>
            ))}
        </View>
        <View style={styles.editTextContainer}>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.priceDistributionContainer}>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalPrice}>$ {getTotal()}</Text>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Delivery</Text>
              <Text style={styles.subtotalPrice}>
                $ {getTotal() > 0 ? 2 : 0}
              </Text>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Total</Text>
              <Text style={styles.subtotalPrice}>
                $ {getTotal() > 0 ? getTotal() + 2 : 0}
              </Text>
            </View>
          </View>
          <View style={styles.proceedContainer}>
            <Text style={styles.proceedText}>Proceed To checkout</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  lineBreak: {
    borderWidth: 1,
    borderColor: '#EBEBFB',
    width: '90%' || 327,
    display: 'flex',
    alignSelf: 'center',
    marginVertical: 10,
  },
  editTextContainer: {
    width: '90%',
    height: 16,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  editText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#2A4BA0',
  },

  bottomContainer: {
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
