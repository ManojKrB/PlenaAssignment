import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../store/ProductsSlice';

interface ProductListProps {
  props: any;
}

const ProductList: React.FC<ProductListProps> = ({props}) => {
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();

  const finalProductList = useSelector(
    (state: {product: any}) => state.product,
  );
  // console.log('final product list are ', finalProductList);

  const cartItems = useSelector((state: {cart: any}) => state.cart);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then(res => {
      if (res?.data?.products) {
        setProductsList(res.data.products);
      }
    });
  }, []);

  useEffect(() => {
    const updatedProductList = productsList?.map((element: any) => {
      return {...element, quantity: 0};
    });

    const productsToAdd = updatedProductList?.filter(
      item =>
        !finalProductList.find(
          (existingItem: {id: any}) => existingItem.id === item.id,
        ),
    );

    productsToAdd?.map(item => {
      dispatch(addProduct(item));
    });
  }, [productsList, finalProductList, dispatch]);

  return (
    <View style={styles.productListContainer}>
      <View>
        <Text style={styles.recommendedText}>Recommended</Text>
      </View>

      <FlatList
        data={finalProductList}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.cardList}>
            <ProductCard item={item} props={props} />
          </View>
        )}
        keyExtractor={item => (item as any).id}
      />
    </View>
  );
};

export default ProductList;

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
