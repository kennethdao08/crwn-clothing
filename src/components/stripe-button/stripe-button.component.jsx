import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H74V8D4Ek1tyltVOuFGxq5Les23gNYzGR3nLn6hgfJ9IzY6DqDzi8XmTaNUFZaNLo6RoW1Uc2O8S9CnTVuWAb6300jgczwf54';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
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
    );
};

export default StripeCheckoutButton;