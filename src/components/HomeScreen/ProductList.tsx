import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

interface ProductListProps {
  props: any;
}

const ProductList: React.FC<ProductListProps> = ({props}) => {
  const [productsList, setProductsList] = useState();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then(res => setProductsList(res?.data?.products));
  }, []);

  return (
    <View style={styles.productListContainer}>
      <View>
        <Text style={styles.recommendedText}>Recommended</Text>
      </View>

      <FlatList
        data={productsList}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.cardList}>
            <ProductCard
              price={item?.price}
              title={item?.title}
              thumbnail={item?.thumbnail}
              id={item?.id}
              props={props}
            />
          </View>
        )}
        keyExtractor={item => item.id}
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
