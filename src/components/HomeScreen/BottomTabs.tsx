import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomTabs = () => {
  return (
    <View style={styles.bottomTabContainer}>
      <View style={styles.homeContainer}>
        <Image
          source={require('../../assets/images/home.png')}
          style={styles.homeIcon}
        />
        <Text>Home</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <Image
          source={require('../../assets/images/Category.png')}
          style={styles.homeIcon}
        />
        <Text>Categories</Text>
      </View>
      <View style={styles.favouriteContainer}>
        <Image
          source={require('../../assets/images/Heart.png')}
          style={styles.homeIcon}
        />
        <Text>Favourite</Text>
      </View>
      <View style={styles.moreContainer}>
        <Image
          source={require('../../assets/images/more-vertical.png')}
          style={styles.homeIcon}
        />
        <Text>More</Text>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomTabContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 103,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  homeContainer: {},
  homeIcon: {
    width: 24,
    height: 24,
  },
  categoriesContainer: {},
  favouriteContainer: {},
  moreContainer: {},
});
