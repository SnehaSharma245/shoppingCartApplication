import React , {createContext , useContext , useReducer} from 'react'
function cartReducer(cart , action){
    if(action.type === "ADD_ITEM"){
        return [...cart , action.payload]
    }
    if(action.type === "INCREASE_QTY"){
        return cart.map(item=>{
            if(item.id===action.payload.id){
                return {...item , quantity: item.quantity+1}
            }
            else{
                return {...item}
            }
        })
    }
    if(action.type === "DECREASE_QTY"){
        return cart.map(item=>{
            if(item.id===action.payload.id){
                return {...item , quantity: item.quantity-1}
            }
            else{
                return {...item}
            }
        })
    }
    if(action.type === "REMOVE_ITEM"){
        return cart.filter(item=>item.id !== action.payload.id)
    }
    return cart;
}
const cartContext = createContext()
function CartProvider({children}) {
    const [cart , dispatch] = useReducer(cartReducer , [])
    const addItemToCart = (newCartItem) =>{
        dispatch({
            type: "ADD_ITEM",
            payload: newCartItem
        })
    }
    const increaseQuantity = (id) =>{
        dispatch({
            type: "INCREASE_QTY",
            payload:{id:id}
        })
    }
    const decreaseQuantity = (id) =>{
        dispatch({
            type: "DECREASE_QTY",
            payload:{id:id}
        })
    }
    const removeItemFromCart = (id) =>{
        dispatch({
            type: "REMOVE_ITEM",
            payload:{id:id}
        })
    }
  return (
    <cartContext.Provider value={{cart , addItemToCart , increaseQuantity,decreaseQuantity,removeItemFromCart}}>
        {children}
    </cartContext.Provider>
  )
}
export function useCart(){
    return useContext(cartContext)
}
export default CartProvider