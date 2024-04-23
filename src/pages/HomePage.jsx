import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const HomePage = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Header />
      <section>
        <div className="max-w-7xl mx-auto p-4">
          <div className="text-center mb-8">
            <span>--- Sip & Savor ---</span>
            <h1 className="text-4xl text-[#331A15] mb-4">Our coffees</h1>
            <button className="btn bg-[#E3B577]">
                <Link to={'/add-coffee'}>Add coffee</Link>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
