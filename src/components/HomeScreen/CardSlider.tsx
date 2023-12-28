import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardSlider = () => {
  return (
    <View style={styles.cardSliderContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainerLeft}>
          <View>
            <Image
              source={require('../../../assets/images/card-image.png')}
              style={styles.cardIcon}
            />
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.getText}>Get</Text>
            <Text style={styles.offText}>50% OFF</Text>
            <Text style={styles.firstOrderText}>On first 03 order</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Image
              source={require('../../../assets/images/card-image.png')}
              style={styles.cardIcon}
            />
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.deliveryText}>Delivery in</Text>
            <Text style={styles.minutesText}>30 minutes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardSlider;

const styles = StyleSheet.create({
  cardSliderContainer: {
    height: 123,
    marginLeft: 20,
    marginTop: 27,
  },
  cardContainerLeft: {
    height: 123,
    width: 269,
    marginRight: 18,
    borderRadius: 16,
    backgroundColor: '#F9B023',
    display: 'flex',
    flexDirection: 'row',
  },
  cardIcon: {
    margin: 22,
    height: 68,
    width: 68,
  },
  cardDescription: {
    marginLeft: 40,
    marginTop: 15,
  },
  getText: {
    width: 34,
    height: 28.88,
    fontFamily: 'Manrope',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 27.32,
    color: '#FFFFFF',
  },
  offText: {
    width: 114,
    height: 38.5,
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: 26,
    lineHeight: 35.52,
    color: '#FFFFFF',
  },
  firstOrderText: {
    width: 96,
    height: 19.25,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 17.76,
    color: '#FFFFFF',
  },
  deliveryText: {
    height: 28.88,
    fontFamily: 'Manrope',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 27.32,
    color: '#FFFFFF',
  },
  minutesText: {
    height: 38.5,
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: 22,
    lineHeight: 35.52,
    color: '#FFFFFF',
  },
  cardContainer: {
    height: 123,
    width: 269,
    marginRight: 18,
    borderRadius: 16,
    backgroundColor: 'lightgrey',
  },
});
