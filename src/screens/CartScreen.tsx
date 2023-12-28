import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/CartScreen/TopBar';
import ItemContainer from '../components/CartScreen/ItemContainer';
import BottomContainer from '../components/CartScreen/BottomContainer';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={{marginTop: 40}}>
        <ItemContainer />
        <View style={styles.lineBreak} />
        <ItemContainer />
        <View style={styles.lineBreak} />
        <ItemContainer />
        <View style={styles.lineBreak} />
        <ItemContainer />
        <View style={styles.lineBreak} />
        <ItemContainer />
        <View style={styles.lineBreak} />
      </View>
      <View style={styles.editTextContainer}>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <BottomContainer />
    </View>
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
});
