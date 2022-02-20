import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({ price }) {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KVEuqBDYPd6WoJknR5R4G2be4x4c0WXtdBhUVfzGOY8OJy83AqSDanhCbGA3PGTCBGfi6EZWMKDV4j23v5B8vnl00p7iyXZc5'

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
