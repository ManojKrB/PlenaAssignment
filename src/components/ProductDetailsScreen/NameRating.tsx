import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from '@rneui/themed';
import StarRating from './StartRating';

const NameRating = () => {
  return (
    <View style={styles.nameRatingContainer}>
      <View>
        <Text style={styles.productName}>Top Orange</Text>
      </View>
      <View>
        <StarRating rating={4.5} />
      </View>
    </View>
  );
};

export default NameRating;

const styles = StyleSheet.create({
  nameRatingContainer: {
    margin: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    height: 126,
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: 50,
    lineHeight: 62.55,
  },
});
