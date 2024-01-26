import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../components/CheckoutForm/CheckoutForm';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';

const Book = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB);
  const { id } = useParams();
  const { loader } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: service = {} } = useQuery({
    queryKey: ['service', id],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/services/${id}`);
      return res.data;
    },
  });

  console.log(service);
  return (
    <aside className="px-5">
      <h3 className="text-3xl font-[Poppins] font-bold">Book</h3>
      <div className="bg-slate-100 mt-5 p-8 min-h-[calc(100vh-98px)]">
        <Elements stripe={stripePromise}>
          <CheckoutForm service={service} />
        </Elements>
      </div>
    </aside>
  );
};

export default Book;
