import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    
            Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={65000} // part of the home work
            displayType={"text"}
            thousandSeparator={true}
            prefix={"INR:"}
            />
            <button>Proceed to check out</button>
        </div>
    )
}

export default Subtotal
