import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {data?.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, {width: dotWidth}]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dot: {
    width: 19,
    height: 5,
    borderRadius: 6,
    backgroundColor: '#F9B023',
    marginHorizontal: 4,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    marginLeft: 15,
  },
});
