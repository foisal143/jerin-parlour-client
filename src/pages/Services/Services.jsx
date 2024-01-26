import ServiceCard from '../../components/ServiceCard';

import useServices from '../../hooks/useServices';
import { Link } from 'react-router-dom';
const Services = () => {
  const [services] = useServices();

  return (
    <section className="pb-12">
      <div className="px-5 lg:px-12 h-[200px] flex justify-start items-center bg-[#FFF8F5]">
        <div>
          <h3 className="text-4xl font-bold font-[Poppins]">/Services</h3>
          <p className="label-text">Our Best Services here</p>
        </div>
      </div>
      <div>
        <h3 className="text-center my-12 font-bold text-3xl font-[Poppins]">
          All <span className="pink ">Services</span>
        </h3>

        <div className="my-12 px-5 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(service => (
            <div key={service._id} className="shadow-xl rounded-md">
              <ServiceCard
                name={service.name}
                details={service.details}
                price={service.price}
                img={service.image}
              ></ServiceCard>
              <div className="text-center pb-5">
                <Link to={`/dashboard/book/${service._id}`}>
                  <button className="btn-coustom">Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
