import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Rating from 'react-rating';
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <section className="px-5 lg:px-12 my-20">
      <h3 className="text-4xl font-bold text-center font-[Poppins]">
        Testimonials
      </h3>

      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={breakpoints}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews.map(review => (
            <SwiperSlide key={review.name}>
              <div className="h-[287px] space-y-5 text-center  md:text-start">
                <div className="md:flex mx-auto md:mx-0  w-fit items-center gap-5">
                  <img
                    className="w-16 h-16 mx-auto md:mx-0 rounded-full"
                    src={review.image}
                    alt=""
                  />
                  <div>
                    <h5 className="text-2xl font-bold">{review.name}</h5>
                    <p className="font-semibold">{review.profession}</p>
                  </div>
                </div>
                <p className="text-gray-500">{review.details}</p>
                <Rating
                  placeholderRating={review.rating}
                  emptySymbol={<FaRegStar />}
                  readonly
                  placeholderSymbol={<FaStar className="text-yellow-500" />}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
