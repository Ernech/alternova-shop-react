import { Product } from "./Product"
import '../../styles/products.css'
import { useCartStore } from "../../hooks/useCartStore"

export const ProductsList = () => {

  const {items} = useCartStore()

  return (
    <div className="products-container">
       {items.map((product)=>
                <Product key={product.id} product={product}/>
            )}
    </div>
  )
}
