import { Link } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="container mx-auto">
    <div className="navbar bg-yellow-800 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-800 text-white rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addCoffee'>Add Coffee</Link></li>
        <li><Link to='/updateCoffee'>Update Coffee</Link></li>
        <li><Link to='/'>Contact</Link></li>
       
      </ul>
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn btn-ghost normal-case font-bold text-2xl"><GiCoffeeCup></GiCoffeeCup>Espresso Cafe</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
