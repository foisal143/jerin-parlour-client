import ServiceCard from '../../../components/ServiceCard';
import img1 from '../../../assets/icons/Group 1372.png';
import img2 from '../../../assets/icons/Group 1373.png';
import img3 from '../../../assets/icons/Group 1374.png';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <section className="my-20 px-12">
      <h3 className="text-4xl font-[Poppins] font-bold text-center">
        Our Awesome <span className="pink">Services</span>
      </h3>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ServiceCard
          img={img2}
          name="Anti Age Face Treatment"
          details="We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
          price={199}
        ></ServiceCard>
        <div className="shadow-2xl rounded-md">
          <ServiceCard
            img={img1}
            name="Hair Color & Styleing"
            details="Amazing flyers, social media posts and brand representations that would make your brand stand out."
            price={99}
          ></ServiceCard>
        </div>
        <ServiceCard
          img={img3}
          name="Skin Care Treatment"
          details="With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
          price={299}
        ></ServiceCard>
      </div>
      <div className="mt-12 text-center">
        <Link to="/services">
          <button className="btn-coustom ">Explore More</button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
