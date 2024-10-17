import React, { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import styles from "./Header.module.css"
import Container from './UI/Container'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from '../contexts/CartProvider'
function Header() {
    const [isModalOpen , setIsModalOpen] = useState(false)
    const {cart} = useCart()
    const totalQt = cart.reduce((acc,item)=>{
        return acc + item.quantity
    } , 0)
    function closeModal(){
        setIsModalOpen(false)
    }
    useEffect(()=>{
        if(isModalOpen){
            document.documentElement.style.overflowY = "hidden"
        }else{
            document.documentElement.style.overflowY = "scroll"

        }
    } , [isModalOpen])
  return (
    <header className={styles.header}>
        <Container >
        <nav className={styles.nav}> 
        <h1>My Shop</h1>
        <button onClick={()=>{setIsModalOpen(true)}} className={styles.showCartButton}>
            <span className={styles.cartIconAndNumber}>
            <AiOutlineShoppingCart />
            {totalQt>0 && <span className={styles.number}>{totalQt}</span>}
            
            </span>
            <span>Cart</span>
        </button>
        </nav>
        </Container>
        
        {isModalOpen && 
        <Modal closeModal={closeModal}>
            <Cart />
        </Modal>}
        
    </header>
  )
}

export default Header