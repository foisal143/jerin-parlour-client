import useBookings from '../../../hooks/useBookings';

const BookingList = () => {
  const [bookings] = useBookings();

  return (
    <section>
      <h3 className="text-3xl pb-5 font-bold font-[Poppins]">
        My Booking List
      </h3>
      <div className=" p-5 min-h-[88vh] bg-slate-100">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookings.map(service => (
            <div
              className="p-3   font-[Poppins] shadow-md bg-white rounded-md"
              key={service._id}
            >
              <header className="flex justify-between items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={service.image}
                  alt=""
                />
                {service.status === 'pending' ? (
                  <span className="text-red-400 p-2 rounded-md bg-red-100">
                    Pending
                  </span>
                ) : (
                  <span className="text-green-400 p-2 rounded-md bg-green-100">
                    Done
                  </span>
                )}
              </header>
              <div className="mt-5">
                <h3 className="text-2xl mt-5 font-bold">
                  {service.serviceName}
                </h3>
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingList;
