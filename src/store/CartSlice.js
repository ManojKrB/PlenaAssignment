import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          brand: action.payload.brand,
          category: action.payload.category,
          description: action.payload.description,
          discountPercentage: action.payload.discountPercentage,
          id: action.payload.id,
          images: action.payload.images,
          price: action.payload.price,
          quantity: action.payload.quantity + 1,
          rating: action.payload.rating,
          stock: action.payload.stock,
          thumbnail: action.payload.thumbnail,
          title: action.payload.title,
        });
      } else {
        state[myIndex].quantity = state[myIndex].quantity + 1;
      }
    },
    decrementItem(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].quantity -= 1;
      }
    },
    deleteItem(state, action) {
      return (state = state.filter(item => item.id != action.payload));
    },
  },
});

export const {addToCart, decrementItem, deleteItem} = CartSlice.actions;

export default CartSlice.reducer;
