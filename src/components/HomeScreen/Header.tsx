import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.nameAndIconContainer}>
        <View>
          <Text style={styles.name}>Hey, Rahul</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/Cart-Icon.png')}
            style={styles.cartImage}
          />
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <View>
          <Image
            source={require('../../../assets/images/Search-Icon.png')}
            style={styles.searchImage}
          />
        </View>
        <View>
          <Text style={styles.searchText}>Search Products or store</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.addressContainer}>
          <View>
            <Text style={styles.deliveryText}>DELIVERY TO</Text>
          </View>
          <View style={styles.addressIconContainer}>
            <View>
              <Text style={styles.addressText}>Green Way 3000, Sylhet</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/images/arrow-Icon.png')}
                style={styles.arrowIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.deliveryTimeContainer}>
          <View>
            <Text style={styles.deliveryText}>WITHIN</Text>
          </View>
          <View style={styles.addressIconContainer}>
            <View>
              <Text style={styles.addressText}>1 Hour</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/images/arrow-Icon.png')}
                style={styles.arrowIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 252,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    backgroundColor: '#2A4BA0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameAndIconContainer: {
    width: '90%' || 339,
    height: 30,
    marginLeft: 20,
    marginTop: 52,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    width: 110,
    height: 30,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 30.05,
    color: '#F8F9FB',
  },
  cartImage: {
    height: 32,
    width: 32,
  },
  searchBarContainer: {
    width: '90%' || 335,
    height: 56,
    marginTop: 35,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#153075',
    borderRadius: 28,
    backgroundColor: '#153075',
    display: 'flex',
    flexDirection: 'row',
  },
  searchImage: {
    width: 18,
    height: 18,
    margin: 19,
  },
  searchText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#8891A5',
    marginLeft: 8,
    marginTop: 18,
  },
  detailsContainer: {
    height: 38,
    width: '90%' || 335.94,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressContainer: {
    width: 173.94,
    height: 38,
  },
  deliveryText: {
    fontFamily: 'Manrope',
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 15.03,
    color: 'grey',
    height: 15,
    width: 71,
  },
  addressIconContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  addressText: {
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#F8F9FB',
  },
  arrowIcon: {
    height: 7,
    marginLeft: 8,
    marginTop: 7,
  },
  deliveryTimeContainer: {
    height: 38,
  },
});
