import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useTan from "../../useTan";
import { useEffect, useState } from "react";
import axios from "axios";


const CheckOut = () => {
    const [data] = useTan()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    const totalPrice = data?.data.reduce((acc, item) => acc + acc + item.price, 0);

    console.log(totalPrice);

    // useEffect(() => {
    //     axios.post('http://localhost:5000/create-payment-intent', { price: totalPrice }).then(res => setClientSecret(res.data.clientSecret))
    // }, [totalPrice]);

    console.log(clientSecret);

    async function handleSubmit(event) {
        event.preventDefault();
        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });

        if (!stripe || !elements) {
            return

        } else if (card == null) {
            return
        }

        if (error) {
            console.log('err', error);
        } else {
            console.log('success', paymentMethod);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn " type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOut;