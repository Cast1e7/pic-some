import { useContext} from "react"
import useHover from "../hooks/useHover"
import PropTypes from 'prop-types'
import { PhotosContext } from "../PhotosContext"

function Photo({className, img}) {
    const [hovered, hoverRef] = useHover()

    const {toggleFavorite, addRemoveCartItems, cartItems} = useContext(PhotosContext)

    const heartIcon = img.isFavorite ? 
        <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i> : 
        hovered ? <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i> : ""
        
    const cartIcon = cartItems.some(item => item.id === img.id) ? 
        <i onClick={() => addRemoveCartItems(img)} className="ri-shopping-cart-fill cart"></i> : 
        hovered ? <i onClick={() => addRemoveCartItems(img)} className="ri-add-circle-line cart"></i> : ""

    return (
        <div 
            className={`${className} image-container`} 
            ref={hoverRef}
            >
            {heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Photo.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })

}


export default Photo