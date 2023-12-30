import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

interface CarouselContainerProps {
  images: string[];
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({images}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [isHeartClicked, setIsHeartClicked] = useState(false);

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
      <TouchableOpacity
        onPress={() => setIsHeartClicked(!isHeartClicked)}
        style={styles.iconContainer}>
        <Image
          source={
            !isHeartClicked
              ? require('../../../assets/images/wishlist-icon.png')
              : require('../../../assets/images/pink-heart.png')
          }
          style={styles.heartIcon}
        />
      </TouchableOpacity>
      <View>
        <FlatList
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item}) => <SlideItem item={item} />}
          onScroll={handleScroll}
        />
      </View>
      <View style={styles.pagination}>
        <Pagination data={images} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default CarouselContainer;

const styles = StyleSheet.create({
  carausalContainer: {
    height: 207,
    backgroundColor: '#F8F9FB',
    width: '100%',
  },
  pagination: {
    marginTop: 20,
  },
  heartIcon: {
    height: 24,
    width: 24,
    marginHorizontal: 20,
    marginTop: 5,
  },
  iconContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
});
