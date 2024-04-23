import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="text-5xl text-amber-800 text-center my-5">
        Coffee Store Header
      </h1>
      <div className="flex justify-center gap-6 *:text-amber-900 underline">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
      </div>
    </header>
  );
};

export default Header;
