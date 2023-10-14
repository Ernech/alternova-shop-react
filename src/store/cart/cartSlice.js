import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json'
export const cartSlice = createSlice({
   name: 'cart',
   initialState:{
    items: data,
    cartList:[],
    totalOrderPrice:0
   },
   reducers: {
    
    addProductToCart:(state,{payload})=>{
        if(state.cartList.length>0 && state.cartList.find(item=>item.id===payload.id)){
            state.cartList=state.cartList.map(item=>{
                if(item.id===payload.id){
                    item.quantity+=payload.quantity;
                    item.totalPrice+=payload.quantity*payload.unitPrice;
                }
                return item
            })
        }
        else{
            state.cartList.push(payload);
        }
        state.totalOrderPrice += payload.totalPrice; 
    },
    purchaseCart(state){
        if(state.cartList.length===0){
            return
        }
        const newData = state.items.map((item)=>{
            let cartItemIdex = state.cartList.findIndex(cartItem=>cartItem.id===item.id);
            if(cartItemIdex>=0){
                item.stock -=state.cartList[cartItemIdex].quantity;
                
            }
            return item
        });
        state.items=newData;
    },
    clearState:(state)=>{
        state.cartList=[];
        state.totalOrderPrice=0;
    }
   }
})

export const { clearState, addProductToCart, purchaseCart } = cartSlice.actions