import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
const MakeAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const handlerMakeAdmin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    axiosSecure.patch(`/users/${email}`).then(res => {
      if (res.data.modifiedCount > 0) {
        toast.success('Promoted to Admin Done');
      }
    });
  };
  return (
    <section>
      <h3 className="text-3xl pb-5 font-bold font-[Poppins]">Make Admin</h3>
      <div className="p-5 bg-slate-100 min-h-[87vh]">
        <div className="h-[250px] bg-white ">
          <form onSubmit={handlerMakeAdmin} action="">
            <div className="lg:w-2/3 p-5 font-[Poppins]">
              <label
                htmlFor="email"
                className="label-text text-xl font-semibold"
              >
                Email
              </label>
              <div className="flex items-center gap-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative  w-[60%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <button type="submit" className="btn-coustom">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
