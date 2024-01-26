import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Review from '../DashboardUser/Review/Review';
import toast from 'react-hot-toast';

const Registar = () => {
  const axiosSecure = useAxiosSecure();
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const name = form.name.value;

    createUser(email, password)
      .then(res => {
        const loggedUser = res.user;
        updateUserProfile(loggedUser, name, image)
          .then(data => {
            console.log(data.user);
            const userInfo = {
              name: loggedUser.displayName,
              email: loggedUser.email,
            };
            axiosSecure.post('/users', userInfo).then(res => {
              if (res.data.insertedId) {
                toast.success('Registar success');
                navigate('/');
              }
            });
          })
          .catch(er => console.log(er.message));
      })
      .catch(er => console.log(er.message));
  };

  const handlerGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const loggedUser = res.user;
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        axiosSecure.post('/users', userInfo).then(res => {
          if (res.data.insertedId) {
            toast.success('Registar success');
            navigate('/');
          }
        });
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center">
      <div className="p-5 border w-full lg:w-1/3">
        <h3 className="mb-5 font-[Poppins] font-semibold text-3xl">
          Please Create Account
        </h3>
        <form onSubmit={handleLogin} className="max-w-md  w-full space-y-8">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label htmlFor="image" className="sr-only">
              Image
            </label>
            <input
              id="image"
              name="image"
              type="url"
              autoComplete="image"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
              placeholder="Enter image url"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            <div className="absolute z-20 inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="h-5 w-5 text-gray-400 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  className="h-5 w-5 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="btn-coustom w-full">
              Sign Up
            </button>
          </div>
        </form>
        <p className="label-text text-center mt-5">
          Already Have an Account?{' '}
          <Link to="/login">
            <span className="pink">Go To Login </span>
          </Link>
        </p>
        <div className="mt-4 text-center  w-full  mx-auto">
          <span className="text-gray-600">Or sign in with</span>
          {/* Your Google login button goes here */}
          <button
            onClick={handlerGoogleLogin}
            className="w-full font-semibold rounded-full mt-5 flex justify-between items-center p-2 border border-gray-300 "
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png"
              alt=""
            />{' '}
            <p className="mx-auto w-fit">Google Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registar;
