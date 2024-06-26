import { useEffect, useState } from "react";

const useCoffees = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const refetch = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    fetch("https://coffee-store-server-ten-theta.vercel.app/coffee")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setCoffees(data);
        setLoading(false);
      });
  }, [toggle]);

  return {coffees, loading, refetch};
};

export default useCoffees;
