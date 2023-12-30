import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, decrementItem, deleteItem} from '../../store/CartSlice';

interface ItemContainerProps {
  item: any;
}

const ItemContainer: React.FC<ItemContainerProps> = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../../../assets/images/product-image-black.png')}
          source={{uri: item?.thumbnail}}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namePriceContainer}>
        <Text style={styles.name}>{item?.title}</Text>
        <Text style={styles.price}>$ {item?.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => {
            if (item?.quantity > 1) {
              dispatch(decrementItem(item));
            } else {
              dispatch(deleteItem(item.id));
            }
          }}>
          <Image
            source={require('../../../assets/images/decrement.png')}
            style={styles.decrementIcon}
          />
        </TouchableOpacity>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{item.quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(addToCart(item));
          }}>
          <Image
            source={require('../../../assets/images/increment.png')}
            style={styles.decrementIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemContainer;

const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    width: '90%' || 325,
    height: 42,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  productImage: {
    height: 30,
    width: 30,
  },
  namePriceContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  name: {
    width: 57,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#1E222B',
  },
  price: {
    width: 36,
    height: 20,
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E222B',
  },
  quantityContainer: {
    width: 110,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
    flex: 1,
  },
  decrementIcon: {
    width: 40,
    height: 40,
  },
  quantity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    width: 6,
    height: 19,
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19.12,
    color: '#1E222B',
    marginHorizontal: 11,
  },
});
