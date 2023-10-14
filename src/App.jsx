
import { Navbar } from './components/Navbar';
import './index.css'
import { ProductsList } from './components/products/ProductsList';
import { Cart } from './components/cart/Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';


export const App = () => {
  
return (
  <Provider store={store}> 

    <Navbar/>
    <div className="main-container">
      <ProductsList/>
      <Cart/>    
    </div>
  </Provider>
  )
}
