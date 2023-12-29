import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from './StartRating';

interface NameRatingProps {
  title: string;
  rating: number;
}

const NameRating: React.FC<NameRatingProps> = ({title, rating}) => {
  return (
    <View style={styles.nameRatingContainer}>
      <View>
        <Text style={styles.productName}>{title}</Text>
      </View>
      <View>
        <StarRating rating={rating} />
      </View>
    </View>
  );
};

export default NameRating;

const styles = StyleSheet.create({
  nameRatingContainer: {
    margin: 20,
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
