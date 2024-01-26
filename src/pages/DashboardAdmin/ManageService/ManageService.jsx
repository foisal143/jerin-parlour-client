import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useServices from '../../../hooks/useServices';
import { FaTrash } from 'react-icons/fa';
const ManageService = () => {
  const [services, refetch] = useServices();
  const axiosSecure = useAxiosSecure();
  const handlerDelete = id => {
    axiosSecure.delete(`/services/${id}`).then(res => {
      if (res.data.deletedCount > 0) {
        toast.error('Deleted Success');
        refetch();
      }
    });
  };
  return (
    <section className="p-5 font-[Poppins]">
      <h3 className="text-3xl font-semibold pb-5">Manage Service</h3>

      <div className=" p-5 bg-slate-100 min-h-[calc(100vh-150px)]">
        <div className="overflow-x-auto bg-white p-5">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="bg-slate-100">
                <th>#</th>
                <th>Name</th>
                <th>price</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr key={service._id}>
                  <th>{i + 1}</th>
                  <td>{service.name}</td>
                  <td>${service.price}</td>

                  <td>
                    <button
                      onClick={() => handlerDelete(service._id)}
                      className="btn btn-error text-white btn-circle"
                    >
                      <FaTrash />
                    </button>
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

export default ManageService;
