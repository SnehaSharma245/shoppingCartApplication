import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from "./CartItem.module.css"
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({id,img,title,price,quantity }) {
    const {cart,increaseQuantity,decreaseQuantity,removeItemFromCart} = useCart()
  return (
    <div className={styles.cartItem}>
      {/* left div */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage}/>
        </div>
          <h3>{title}</h3>
      </div>


      {/* right div */}
      <div className={styles.otherControls}>
          <div className={styles.qtyInput}>
            <button onClick={()=>{
            if(quantity<=1){return}
            decreaseQuantity(id)}}><AiOutlineMinus/></button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button onClick={()=>{increaseQuantity(id)}}><AiOutlinePlus/></button>
          </div>
          <p> &#8377; {price*quantity}</p>
          <button className={styles.removeItemBtn} onClick={()=>{removeItemFromCart(id)}}><ImCross/></button>
      </div>
     
    </div>
  )
}

export default CartItem