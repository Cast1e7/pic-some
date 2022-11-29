import { createContext, useEffect, useState } from "react"

const PhotosContext = createContext()

function PhotosContextProvider(props) {
    const [allPhotos , setAllPhotos] = useState(JSON.parse(localStorage.getItem("allPhotos")) || [])
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    useEffect(() => {
        async function getAllPhotosData() {
           const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
           const data = await res.json()
           setAllPhotos(data)
        }
        if(allPhotos.length === 0) {
            getAllPhotosData().catch(e => console.log(e.message))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("allPhotos",JSON.stringify(allPhotos))
    },[allPhotos])

    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    },[cartItems])

    function toggleFavorite(id) {
        setAllPhotos(prevPhotos => prevPhotos.map(photo => {
            return photo.id === id ? {...photo, isFavorite: !photo.isFavorite}
                : photo
        }))
    }

    function addRemoveCartItems(img) {
        setCartItems(prevCart => {
            return prevCart.some(item => item.id === img.id) 
                ? prevCart.filter(item => item.id !== img.id)
                : [...prevCart, img]
        })
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <PhotosContext.Provider value={{allPhotos, toggleFavorite, addRemoveCartItems, cartItems, clearCart}}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContextProvider, PhotosContext}