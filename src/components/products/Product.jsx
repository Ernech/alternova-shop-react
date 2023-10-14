
import '../../styles/products.css'
import { useCartStore } from '../../hooks/useCartStore';

export const Product = ({product}) => {
  
   const {addToCart, quantity, onHandleChange} = useCartStore()
   


  
  
  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} />
      {/* <span>{name}</span> */}
      <div className="inputs-container">
        <input type="number" name="quantity" id="quantity" min="0" value={quantity} onChange={onHandleChange}/>
        <button onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}
