import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Components/Products';
import CartProvider from './contexts/CartProvider';
import Header from './Components/Header';
function App() {
  return (
    <>
    <CartProvider>
    <ToastContainer position='bottom-right' newestOnTop={true} autoClose={800} hideProgressBar={true}/>
    <Header />
    <Products />
    </CartProvider>
    </>
  )
}

export default App