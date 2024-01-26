import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
const Login = () => {
  const axiosSecure = useAxiosSecure();
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.pathname || '/';
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(data => {
        const loggedUser = data.user;
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        axiosSecure.post('/users', userInfo).then(res => {
          if (res.data.insertedId) {
            toast.success('user added');
          }
        });
        toast.success('Login success');
        navigate(from, { replace: true });
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
            toast.success('user added');
          }
        });
        toast.success('Login success');
        navigate(from, { replace: true });
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center">
      <div className="p-5 border w-full lg:w-1/3">
        <h3 className="mb-5 font-[Poppins] font-semibold text-3xl">
          Please Login
        </h3>
        <form onSubmit={handleLogin} className="max-w-md  w-full space-y-8">
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
              Sign in
            </button>
          </div>
        </form>
        <p className="label-text text-center mt-5">
          Do Not Have an Account?{' '}
          <Link to="/registar">
            <span className="pink">Create An Account</span>
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

export default Login;
