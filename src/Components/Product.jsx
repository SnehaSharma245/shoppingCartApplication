import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from "./Product.module.css"
import { toast } from 'react-toastify'
function Product({id , title , img,price}) {
    const { addItemToCart , cart} = useCart()
    function handleAdd(){
      for(let item of cart){
        if(item.id === id){
          toast.error("Item already added to  cart")
          return
        }
      }
        const newCartItem = {
            id : id,
            title : title , 
            img : img,
            price :price,
            quantity: 1
        }

       addItemToCart(newCartItem)
       toast.info("Item added to Cart")
    }
  return (
    <div className={styles.product}>
        {/* <p>id:{id}</p> */}
        <img src={img} alt={title} className={styles.productImage}/>
        <p className={styles.title}>title : {title}</p>
        <p className={styles.price}>price : &#8377;{price}</p>
        <button onClick={handleAdd} className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  )
}

export default Product