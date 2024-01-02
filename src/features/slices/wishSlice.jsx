import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
    name: 'wish',
    initialState: {
        wish: [],
        amount: 0,
        totalWishAmount: 0,
        totalPrice: 0,
    },
    reducers:{
        addToWish(state, action){
            const productId = action.payload;
            try{
                const exist = state.wish.find(
                    (product) => 
                    product.id === productId.id && 
                    product.size === productId.size && 
                    product.color === productId.color
                );
                if(exist){
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalWishAmount++;
                    state.totalPrice += productId.price;
                }else{
                    state.wish.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        img: productId.img,
                        totalPrice: productId.price,
                        name: productId.name,
                        text: productId.text,
                        color: productId.color,
                    })
                    state.totalWishAmount++;
                    state.totalPrice += productId.price;
                }
            }catch(err){
                return err;
            }
        },
        removeFromWish(state, action){
            const productId = action.payload;
            try{
                const exist = state.wish.find(
                    (product) => 
                    product.id === productId.id && 
                    product.size === productId.size && 
                    product.color === productId.color
                );
                if(exist.amount === 1){
                    state.wish = state.wish.filter((product) => product.id !== productId.id ||  product.size !== productId.size || product.color !== productId.color);
                    state.totalWishAmount--;
                    state.totalPrice -= productId.price;
                }else{
                    exist.amount--;
                    exist.totalPrice -= productId.price;
                    state.totalAmount --;
                    state.totalPrice -= productId.price;
                }
            }catch(err){
                return err;
            }
        }
    }
})

export const {addToWish, removeFromWish} = wishSlice.actions;
export default wishSlice.reducer;