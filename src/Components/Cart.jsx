import React from 'react'
import { useCart } from '../contexts/CartProvider'
import CartItem from './CartItem'
import styles from "./Cart.module.css"
function Cart() {
    const {cart} = useCart()
    // let totalAmount = 0;
    // for(let item of cart){
    //     totalAmount += item.price * item.quantity 
    // }

    const totalAmount = cart.reduce((totalAmount , item)=>{
        return totalAmount + item.price * item.quantity
    },0)
    if(cart.length === 0){
        return <h1>No Item Added</h1>
    }
  return (
    <>
    
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
        {cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/> )}
    </div>
    <h1> Total Amount : &#8377; {totalAmount} </h1>
    </>
  )
}

export default Cart