import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <section className="">
      {/* Form card */}
      <div className="max-w-7xl mx-auto px-5">
        <header className="py-8">
          <Link to={'/'} className="text-xl">
            <FaArrowLeftLong className="inline mr-3" /> Back to Home
          </Link>
        </header>

        {/* Form container */}
        <div className="bg-[#F4F3F0] rounded-xl py-14">
          {/* form title and lead */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-center text-3xl font-semibold">Add Coffee</h2>
            <p className="text-lg text-[#1B1A1AB2]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
          </div>

          {/* Coffee add form */}
          <form
            onSubmit={handleAddCoffee}
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
                placeholder="Enter photo URL"
                className="input w-full"
              />
            </label>

            <input
              type="submit"
              value="Add coffee"
              className="btn btn-block col-span-full bg-[#D2B48C]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
