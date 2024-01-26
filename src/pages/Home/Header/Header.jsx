import girlImage from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
const Header = () => {
  return (
    <header className="min-h-[670px] space-y-5  gap-10 lg:flex justify-between items-center bg-[#FFF8F5] px-5 lg:px-12">
      <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-start space-y-5 font-[Poppins]">
        <h2 className="text-5xl font-bold">
          BEAUTY SALON <br /> FOR EVERY WOMEN
        </h2>

        <p className="text-[#666]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus
          commodo ipsum duis <br /> laoreet maecenas. Feugiat{' '}
        </p>
        <button className="btn-coustom">Get an Appointment</button>
      </div>
      <div className="lg:w-1/2">
        <img src={girlImage} alt="" />
      </div>
    </header>
  );
};

export default Header;
