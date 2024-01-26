import { Outlet } from 'react-router-dom';
import Navbar from '../pages/sharedPages/Navbar/Navbar';
import Footer from '../pages/sharedPages/Footer/Footer';
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
