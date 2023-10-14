import React from 'react'
import { TableCart } from './TableCart'
import { useCartStore } from '../../hooks/useCartStore'

export const Cart = () => {
  
  const { totalOrderPrice,startPurchase } = useCartStore()
  
  return (
    <div className="card-container">
    <h2>Cart</h2>
        <br />
    <TableCart/>
    <br />
    <div className="bottom-container">
        <span>Total order price: { totalOrderPrice }</span>
        <button onClick={startPurchase}>CREATE ORDER</button>

    </div>
    
    </div>
  )
}
