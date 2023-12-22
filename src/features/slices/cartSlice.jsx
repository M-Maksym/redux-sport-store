import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers:{
        addToCard(state, action){
            const productId = action.payload;
            try{
                const exist = state.cart.find(
                    (product) => 
                    product.id === productId.id && 
                    product.size === productId.size && 
                    product.color === productId.color
                );
                if(exist){
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }else{
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        totalPrice: productId.price,
                        name: productId.name,
                        color: productId.color,
                    })
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }
            }catch(err){
                return err;
            }
        }
    }
})

export const {addToCard} = cartSlice.actions;
export default cartSlice.reducer;