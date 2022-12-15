import React, { createContext, ReactNode, useContext, useState } from "react";
type ShoppingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartConext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
type CartItem = {
id: number
quantity:number
}
const ShoppingCartConext = createContext( {} as ShoppingCartConext);

export function useShoppingCart(){
    return useContext(ShoppingCartConext)
}

export function ShoppingCartProvider( { children } : ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
}

function increaseCartQuantity(id: number){
    setCartItems( currItems => {
        if (currItems.find(item => item.id === id) == null){
            // Checks to see if an item exists in the array
            return [...currItems, {id, quantity: 1}]
            // Adds in a new item with an id and a quantity if it doesn't yet exist
            
        }else{
            return currItems.map(item => {
            if(item.id === id){
                return {...item, quantity: item.quantity + 1 }
                // If an item already exists than it increments it by one 
            } else {
                return item
                // Other wise return the item
            }
            })
        }
    })
}

function decreaseCartQuantity(id: number){
    setCartItems( currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1){
            // Checks if the item has a quantity of one 
            return currItems.filter(item => item.id !==id)
            // If it does have a quantity it remvoes it by filtering it out
        }else{
            return currItems.map(item => {
            if(item.id === id){
                return {...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
            })
        }
    })
}
function removeFromCart(id: number ){
    setCartItems( currItems => {
        return currItems.filter(item => item.id !==id)
    })
}



    return <ShoppingCartConext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </ShoppingCartConext.Provider>

}