import React from 'react';
import {View, Text, StyleSheet, TextStyle, DimensionValue} from 'react-native';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  const filledStars = Math.floor(rating);
  const decimalPart = rating - filledStars;
  const lastStarWidth: DimensionValue =
    decimalPart > 0 ? `${decimalPart * 100}%` : 0;

  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(
          <Text key={i} style={styles.starFilled}>
            ★
          </Text>,
        );
      } else if (i === filledStars + 1 && decimalPart > 0) {
        stars.push(
          <Text key={i} style={[styles.starFilled, {width: lastStarWidth}]}>
            ★
          </Text>,
        );
      } else {
        stars.push(<Text key={i}>☆</Text>);
      }
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starFilled: {
    color: 'gold',
  },
});

export default StarRating;
