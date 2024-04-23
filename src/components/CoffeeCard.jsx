import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-ten-theta.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((c) => c._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side py-7 bg-[#F5F4F1]">
      <figure className="w-1/3">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full px-8 justify-between items-center gap-6">
        <div>
          <h2 className="text-lg">
            <span className="font-semibold">Name:</span> {name}
          </h2>
          <h2 className="text-lg">
            <span className="font-semibold">Chef:</span> {chef}
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-square bg-[#D2B48C] text-white">
            <IoEye size={20} />
          </button>
          <Link
            to={`/update-coffee/${_id}`}
            className="btn btn-square bg-gray-700 text-white"
          >
            <MdEdit size={20} />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square bg-red-500 text-white"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
