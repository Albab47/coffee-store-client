import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const navigate = useNavigate()

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // send update coffee to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate('/')
        }
      });
  };

  return (
    <section className="">
      {/* Form card */}
      <div className="max-w-7xl mx-auto px-5">
        <header className="py-8">
          <Link to={"/"} className="text-xl">
            <FaArrowLeftLong className="inline mr-3" /> Back to Home
          </Link>
        </header>

        {/* Form container */}
        <div className="bg-[#F4F3F0] rounded-xl py-14">
          {/* form title and lead */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-center text-3xl font-semibold">
              Update Coffee
            </h2>
            <p className="text-lg text-[#1B1A1AB2]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* Coffee details form to update */}
          <form
            onSubmit={handleUpdateCoffee}
            className="grid sm:grid-cols-2 gap-6 p-4 mt-8 max-w-5xl mx-auto"
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">
                  Coffee Name
                </span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee name"
                className="input w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Chef</span>
              </div>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">
                  Supplier Name
                </span>
              </div>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Category</span>
              </div>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Details</span>
              </div>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input w-full"
              />
            </label>

            <label className="form-control w-full col-span-full">
              <div className="label">
                <span className="label-text text-xl font-medium">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="input w-full"
              />
            </label>

            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-block col-span-full bg-[#D2B48C]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateCoffee;
