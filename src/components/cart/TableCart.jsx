import React from 'react'
import '../../styles/cart.css'
import { useCartStore } from '../../hooks/useCartStore';

export const TableCart = () => {

    const { cartList } = useCartStore();

    return (
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
            {cartList.map((item)=>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.totalPrice}</td>
                </tr>)}
            
        </tbody>
    </table>
  )
}
