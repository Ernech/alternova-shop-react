import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, clearState, purchaseCart } from '../store/cart/cartSlice';
import Swal from 'sweetalert2';
export const useCartStore = ()=>{

    const dispatch= useDispatch();
    
    const {items,cartList, totalOrderPrice} = useSelector(state=>state.cart);
    const [quantity, setQuantity] = useState(0);

    const addToCart=(item)=>{
        const {id,name, unitPrice, stock} =  item;
        if(stock<quantity){
            Swal.fire('There was an error',`The product ${name} is out of stock`,'error')
            return
        }
        const newItemToCart = {id,name, quantity, unitPrice, totalPrice:quantity*unitPrice}
        dispatch(addProductToCart(newItemToCart))
        setQuantity(0)
    }
    
  const onHandleChange=({target})=>{
    const {value} = target;
    setQuantity(parseInt(value));
  }
  const startPurchase=()=>{
    if(cartList.length >0){
      dispatch(purchaseCart());
      Swal.fire('Order created','Your order has been purchased','success')  
      dispatch(clearState())
    }
  }


    return{
      items,
        quantity, 
        cartList,
        totalOrderPrice, 
        addToCart, 
        onHandleChange,
        startPurchase
    }

}