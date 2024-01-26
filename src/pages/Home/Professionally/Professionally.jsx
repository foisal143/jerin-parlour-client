import image from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';
const Professionally = () => {
  return (
    <section className="min-h-[614px] px-5 space-y-5 lg:px-12 lg:flex justify-between items-center gap-24 bg-[#FFF8F5]">
      <div className="lg:w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="lg:w-1/2 space-y-5 font-[Poppins]">
        <h2 className="text-4xl font-bold ">
          Let us handle your <br /> screen{' '}
          <span className="pink">Professionally</span>.
        </h2>
        <p className="font-[14px] text-gray-500">
          With well written codes, we build amazing apps for all <br />{' '}
          platforms, mobile and web apps in general ipsum. <br /> Lorem ipsum
          dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo
          ipsum.
        </p>
        <div className="flex pt-16 items-center gap-10">
          <div>
            <span className="pink text-5xl font-bold">500+</span>
            <p className="text-xl font-bold text-gray-500">Happy Customer</p>
          </div>
          <div>
            <span className="pink text-5xl font-bold">16+</span>
            <p className="text-xl font-bold text-gray-500">Total Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionally;
