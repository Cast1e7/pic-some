import PropTypes from 'prop-types'
import { useContext} from "react"
import useHover from '../hooks/useHover'
import { PhotosContext } from "../PhotosContext"

function CartItem({item}) {
    const [hovered, hoverRef] = useHover()
    const {addRemoveCartItems} = useContext(PhotosContext)

    const trashIconClass = hovered ?  "ri-delete-bin-fill" : "ri-delete-bin-line"


    return (
        <div className="cart-item">
            <i className={trashIconClass}
                onClick={() => addRemoveCartItems(item)}
                ref={hoverRef}
                ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
} 

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem