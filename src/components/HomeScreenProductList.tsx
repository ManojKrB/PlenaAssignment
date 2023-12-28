import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeScreenProductCard from './HomeScreenProductCard';

const HomeScreenProductList = () => {
  useEffect(() => {}, []);
  return (
    <View style={styles.productListContainer}>
      <View>
        <Text style={styles.recommendedText}>Recommended</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardList}>
          <HomeScreenProductCard />
          <HomeScreenProductCard />
          <HomeScreenProductCard />
          <HomeScreenProductCard />
          <HomeScreenProductCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreenProductList;

const styles = StyleSheet.create({
  productListContainer: {
    margin: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
  },
  recommendedText: {
    width: 210,
    height: 38,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 38,
    color: '#1E222B',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
