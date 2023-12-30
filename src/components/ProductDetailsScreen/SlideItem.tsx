import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

interface SlideItemProps {
  item: string;
}

const {height, width} = Dimensions.get('screen');

const SlideItem: React.FC<SlideItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item}} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    marginRight: 20,
    alignSelf: 'center',
  },
  container: {
    width: width,
    height: 150,
    position: 'relative',
  },
});

export default SlideItem;
