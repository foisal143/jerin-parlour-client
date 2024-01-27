import { useContext, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
const Review = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handlerSendReview = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const details = form.details.value;
    const reviewInfo = {
      name,
      profession,
      details,
      rating,
      image: user?.photoURL,
    };
    axiosSecure.post('/reviews', reviewInfo).then(res => {
      if (res.data.insertedId) {
        toast.success('Review Added Success');
      }
    });
  };
  return (
    <section className="p-5 font-[Poppins]">
      <h3 className="text-3xl font-semibold pb-5">Add A Review</h3>
      <div className="min-h-[87vh] bg-slate-100 rounded-md p-5">
        <form onSubmit={handlerSendReview} action="">
          <div action="" className="bg-white lg:space-y-5 p-5 rounded-md">
            <div>
              <h1 className="text-center font-semibold text-3xl">Ratings</h1>
              <div className="w-fit mx-auto  text-3xl">
                <Rating
                  onChange={value => setRating(value)}
                  emptySymbol={<FaRegStar className="mx-1" />}
                  fullSymbol={
                    <FaStar className="text-yellow-500 mx-1"></FaStar>
                  }
                  placeholderSymbol={
                    <FaStar className="text-yellow-500 mx-1"></FaStar>
                  }
                  placeholderRating={rating}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <input
                name="name"
                type="text"
                autoComplete="name"
                defaultValue={user?.displayName}
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                placeholder="your name "
              />
            </div>
            <div className="lg:w-1/2">
              <input
                name="profession"
                type="text"
                autoComplete="profession"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                placeholder="Profession  "
              />
            </div>
            <div className="lg:w-1/2">
              <textarea
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                name="details"
                id=""
                cols="30"
                rows="5"
                placeholder="details"
              ></textarea>
            </div>
          </div>

          <div className="text-start px-5 mt-3">
            <button type="submit" className="btn-coustom">
              Send Review
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Review;
