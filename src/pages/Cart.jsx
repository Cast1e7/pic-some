import { useContext, useEffect, useRef, useState } from "react"
import CartItem from "../components/CartItem"
import { PhotosContext } from "../PhotosContext"

export default function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, clearCart} = useContext(PhotosContext)
    const totalCost = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemsElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    function placeOrder() {
        setButtonText("Ordering...")
    }

    const timer = useRef()

    useEffect(() => {
        if(buttonText === "Ordering..."){
            timer.current = setTimeout(() => {
                console.log("Order Placed!")
                clearCart()
                setButtonText("Place Order")
        },3000)}
        return () => clearTimeout(timer.current)
    },[buttonText])

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: {totalCost}</p>
            {
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>}
        </main>
    )
}