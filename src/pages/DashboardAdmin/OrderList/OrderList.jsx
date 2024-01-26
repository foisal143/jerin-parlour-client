import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const OrderList = () => {
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [control, setControl] = useState(false);
  useEffect(() => {
    axiosSecure.get('/bookings').then(res => {
      setBookings(res.data);
    });
  }, [axiosSecure, control]);

  const handlerStatus = item => {
    const status = item.status === 'pending' ? 'done' : 'pending';
    console.log(status, item);

    axiosSecure.patch(`/bookings/${item._id}`, { status }).then(res => {
      if (res.data.modifiedCount > 0) {
        setControl(!control);
        if (item.status === 'pending') {
          toast.success('Booking Approved');
        }
        if (item.status === 'done') {
          toast.error('Booking pending');
        }
      }
    });
  };

  return (
    <section className="p-5 font-[Poppins]">
      <h3 className="text-3xl font-bold pb-5">Order List</h3>
      <div className="min-h-[87vh] p-5 bg-slate-100">
        <div className="overflow-x-auto p-3 rounded-md bg-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-slate-100">
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.serviceName}</td>
                  <td>{item.payment}</td>
                  <td>
                    <select
                      className={`outline-none ${
                        item.status === 'pending'
                          ? 'text-red-400'
                          : 'text-green-400'
                      }`}
                      onChange={() => handlerStatus(item)}
                      defaultValue={item.status}
                      name="status"
                      id=""
                    >
                      <option value="pending">Pending</option>
                      <option value="done">Done</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
