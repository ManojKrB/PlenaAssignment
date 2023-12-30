import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/CartSlice';

interface ProductCardProps {
  item: any;
  props: any;
}

const ProductCard: React.FC<ProductCardProps> = ({item, props}) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Details', {id: item.id});
      }}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log('heart ison clicked')}>
          <Image
            source={require('../../../assets/images/wishlist-icon.png')}
            style={styles.wishlistIcon}
          />
        </TouchableOpacity>
        <View>
          <Image
            // source={require('../../../assets/images/product-image.png')}
            source={{uri: item.thumbnail}}
            style={styles.productIcon}
          />
        </View>
      </View>
      <View style={styles.productDescriptionContainer}>
        <View style={styles.productDescription}>
          <Text style={styles.price}>{item?.price}</Text>
          <Text style={styles.name}>{item?.title}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.addIconContainer}
            onPress={() => dispatch(addToCart(item))}>
            <Image
              source={require('../../../assets/images/add-icon.png')}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    height: 194,
    borderRadius: 12,
    backgroundColor: '#F8F9FB',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  iconsContainer: {
    height: 80,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  wishlistIcon: {
    width: 14.55,
    height: 13.35,
    margin: 10,
  },
  productIcon: {
    height: 68,
    width: 130,
    marginLeft: 10,
    position: 'relative',
    resizeMode: 'contain',
  },
  productDescriptionContainer: {
    width: 160,
    height: 84,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  productDescription: {
    width: '70%',
    height: '100%',
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    // marginBottom: 10,
  },
  addIconContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 15,
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
  },
  price: {
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E222B',
  },
  name: {
    width: 112,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#616A7D',
  },
  addIcon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
