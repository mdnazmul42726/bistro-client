import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {

    return (
        <div>
            <h1 className="text-3xl text-center mb-10">Check Out</h1>

            <Elements stripe={stripePromise}><CheckOut /></Elements>

        </div>
    );
};

export default Payment;