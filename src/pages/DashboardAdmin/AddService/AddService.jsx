import { useState } from 'react';
import imageIcon from '../../../assets/icons/cloud-upload-outline 1.png';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
const AddService = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const handlerAddService = e => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const details = form.details.value;
    const imageFile = form.image.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);
    setLoading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then(res => res.json())
      .then(data => {
        const image = data.data.display_url;
        if (data.success) {
          const serviceInfo = {
            name: serviceName,
            price: parseFloat(price),
            details,
            image,
          };
          axiosSecure.post('/services', serviceInfo).then(res => {
            if (res.data.insertedId) {
              toast.success('Service Added Success');
              setLoading(false);
            }
          });
        }
      });
  };

  return (
    <section className="font-[Poppins]">
      <h3 className="text-3xl font-bold pb-5">Add Service</h3>
      <div className="min-h-[87vh] p-5 bg-slate-100">
        <form onSubmit={handlerAddService} action="">
          <div action="" className="bg-white lg:space-y-5 p-5 rounded-md">
            <div className="lg:flex justify-between items-center gap-5">
              <div className="lg:w-1/2">
                <label htmlFor="email" className="label-text ">
                  Service Title
                </label>
                <input
                  name="serviceName"
                  type="text"
                  autoComplete="serviceName"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="serviceName "
                />
              </div>
              <div className="lg:w-1/2">
                <label htmlFor="price" className="label-text ">
                  Price
                </label>
                <input
                  name="price"
                  type="number"
                  autoComplete="price"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="price "
                />
              </div>
            </div>
            <div className="lg:flex justify-between  gap-5">
              <div className="lg:w-1/2">
                <label className="label-text" htmlFor="details">
                  Details
                </label>
                <textarea
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  name="details"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="image"
                  className="label-text w-fit cursor-pointer"
                >
                  <span>Image</span>
                  <div className="flex w-[200px] px-3 py-2 bg-red-100 pink border-pink-400 border rounded-md items-center gap-3 justify-start">
                    <img className="w-8 h-8 " src={imageIcon} alt="" />{' '}
                    <span>Upload Image</span>
                  </div>
                </label>
                <input className="hidden" type="file" name="image" id="image" />
              </div>
            </div>
          </div>
          <div className="text-end mt-3">
            <button
              disabled={loading}
              type="submit"
              className={loading ? 'btn btn-gost' : 'btn-coustom'}
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
