import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const CheckoutForm = ({ service }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [procecing, setProcecing] = useState(false);
  const [secretkey, setSecretKey] = useState('');
  const price = service.price;
  useEffect(() => {
    axiosSecure.post('/payment-secret', { price }).then(res => {
      setSecretKey(res.data.clientSecret);
    });
  }, [axiosSecure, price]);
  const handleSubmit = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const serviceName = event.target.serviceName.value;

    if (!stripe || !elements) {
      console.log('stripe or element not found');
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      console.log('card is empty');
      return;
    }
    setProcecing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error from payment meht');
      return;
    }
    if (paymentMethod) {
      console.log('payment method success', paymentMethod);
    }
    console.log(secretkey);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretkey, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'Unknown',
            email: user?.email || 'unknown',
          },
        },
      });
    if (confirmError) {
      console.log('error from payment intent');
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === 'succeeded') {
      const bookingInfo = {
        name,
        email,
        serviceName,
        image: service.image,
        status: 'pending',
        payment: 'Cradit Card',
        details: service.details,
      };

      axiosSecure.post('/bookings', bookingInfo).then(res => {
        if (res.data.insertedId) {
          toast.success('Booking success');
          console.log('payment success and booking success');
          setProcecing(false);
        }
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="font-[Poppins]">
      <div className="space-y-5 mb-5 lg:w-1/2">
        <input
          className="block p-2 rounded-md w-full"
          type="text"
          name="name"
          defaultValue={user?.displayName}
        />
        <input
          className="block p-2 rounded-md w-full"
          type="text"
          name="email"
          defaultValue={user?.email}
        />
        <input
          className="block p-2 rounded-md w-full"
          type="text"
          name="serviceName"
          defaultValue={service?.name}
        />
      </div>

      <div className="lg:w-1/2">
        <p className="label-text mb-5">Pay With Card</p>
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
      </div>
      <div className="flex justify-between my-4 items-center lg:w-1/2">
        <p className="text-xl font-bold ">
          {!price ? (
            <p className="flex items-center gap-1">
              Selcet your service{' '}
              <Link to="/services">
                <span className="text-base label-text pink  ">
                  Go To Servic
                </span>
              </Link>
            </p>
          ) : (
            `Your Service Charge will be $${service.price}`
          )}
        </p>
        <button
          className={procecing ? 'btn btn-ghost px-8 py-2' : 'btn-coustom'}
          type="submit"
          disabled={!stripe || !elements || procecing || !price}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
