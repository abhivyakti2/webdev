import { useState } from 'react'
import { products } from './features/products/productList'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './features/cart/cartSlice'
function App() {
  const dispatch=useDispatch();
  const cart =useSelector(state=> state.cart.items);
  return (
    <>
      <div>
        <h1>Shopping Cart
          <h2>Products</h2>
          {products.map(product=>(
            <div key ={product.id}>Product Name : {product.name}
            Product Price : {product.price}
            <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
            </div>
          ))}
        </h1>
      </div>
    </>
  )
}

export default App
