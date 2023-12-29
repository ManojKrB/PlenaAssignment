import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconsContainer from '../components/ProductDetailsScreen/IconsContainer';
import NameRating from '../components/ProductDetailsScreen/NameRating';
import CarouselContainer from '../components/ProductDetailsScreen/CarouselContainer';
import PriceDiscount from '../components/ProductDetailsScreen/PriceDiscount';
import CartBuyNow from '../components/ProductDetailsScreen/CartBuyNow';
import ProductDetails from '../components/ProductDetailsScreen/ProductDetails';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../../App';
import axios from 'axios';

type propType = NativeStackScreenProps<stackScreens, 'Details'>;

interface ProductDetails {
  title: string;
  rating: number;
  images: string[];
  price: number;
  discountPercentage: number;
  description: string;
}

const ProductDetailsScreen = (props: propType) => {
  const {route} = props;
  const {id} = route.params;
  const [productDetails, setProductDetails] = useState<ProductDetails>();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setProductDetails(res?.data));
  }, []);

  return (
    <View style={styles.productDetailsContainer}>
      <IconsContainer props={props} />
      <NameRating
        title={productDetails?.title!}
        rating={productDetails?.rating!}
      />
      <CarouselContainer images={productDetails?.images ?? []} />
      <PriceDiscount
        price={productDetails?.price!}
        discount={productDetails?.discountPercentage!}
      />
      <CartBuyNow />
      <ProductDetails description={productDetails?.description!} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productDetailsContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
});
