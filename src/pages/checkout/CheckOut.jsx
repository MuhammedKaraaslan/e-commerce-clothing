import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CheckOutItem from '../../components/checkout-item/CheckOutItem';

import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelectors';
import './CheckOut.styles.scss'

function CheckOut({ cartItems, total }) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOut)