import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutproduct_image" src={ image }/>

            <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{ title }</p>
             <p className="checkoutproduct_price">
                 <small>INR:</small>
                 <strong>{ price }</strong>
                 </p>

                 <div className="checkoutproduct_rating">
                 {Array(rating)
                    .fill().map((_, i)=>(<p><StarIcon/></p>))}
                 </div>
                 <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
