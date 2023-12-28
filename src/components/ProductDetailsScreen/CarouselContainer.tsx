import {StyleSheet, Text, View, FlatList, Animated, Image} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const CarouselContainer = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  return (
    <View style={styles.carausalContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../../assets/images/Heart.png')}
          style={styles.heartIcon}
        />
      </View>
      <View>
        <FlatList
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={[
            'https://i.dummyjson.com/data/products/1/1.jpg',
            'https://i.dummyjson.com/data/products/1/2.jpg',
            'https://i.dummyjson.com/data/products/1/3.jpg',
            'https://i.dummyjson.com/data/products/1/4.jpg',
            'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
          ]}
          renderItem={({item}) => <SlideItem item={item} />}
          onScroll={handleScroll}
        />
      </View>
      <View style={styles.pagination}>
        <Pagination
          data={[
            'https://i.dummyjson.com/data/products/1/1.jpg',
            'https://i.dummyjson.com/data/products/1/2.jpg',
            'https://i.dummyjson.com/data/products/1/3.jpg',
            'https://i.dummyjson.com/data/products/1/4.jpg',
            'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
          ]}
          scrollX={scrollX}
        />
      </View>
    </View>
  );
};

export default CarouselContainer;

const styles = StyleSheet.create({
  carausalContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    height: 207,
    backgroundColor: '#F8F9FB',
    width: '100%',
  },
  pagination: {
    marginTop: 20,
  },
  heartIcon: {
    // borderWidth: 1,
    // borderColor: 'red',
    height: 24,
    width: 24,
    marginHorizontal: 20,
    marginTop: 5,
  },
  iconContainer: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
    display: 'flex',
    alignItems: 'flex-end',
  },
});
