const ContactUs = () => {
  return (
    <section className="mt-20 px-5 bg-[#FFF8F5] py-12 lg:px-12">
      <h2 className="text-4xl font-bold font-[Poppins] text-center">
        Let us handle your <br /> project, professionally.
      </h2>

      <div className=" flex mt-12 items-center justify-center">
        <form className=" p-8 rounded  lg:w-2/3 w-full">
          <div className="mb-4 space-y-5 lg:space-y-0 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full  p-2 border border-gray-300 outline-gray-300 rounded"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300  rounded"
              />
            </div>
          </div>
          <div className="mb-4 space-y-5 lg:space-y-0 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn-coustom">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
