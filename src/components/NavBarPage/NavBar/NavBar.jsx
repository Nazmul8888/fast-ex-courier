import { Link } from "react-router-dom";


const NavBar = () => {
    const navLinks = <>
     <li className=" text-purple-700 rounded-lg  font-semibold"><Link to='/'>Home</Link></li>
     <li><Link to='/servicesArea'>Services Area</Link></li>
     <li><Link to='/services'>Services</Link></li>
     <li><Link to='/pricing'>Pricing</Link></li>
     <li><Link to='/register '>Register</Link></li>
     <li className=" bg-[#FFCC00] font-semibold rounded-lg " ><Link to='/login'>Login</Link></li>
   

    </>
    return (
        <div className=" bg-white">
           <div className="navbar max-w-screen-xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src="https://i.ibb.co/2sR6n1t/logo.png" alt="" />
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
   
  </div>
</div> 
        </div>
    );
};

export default NavBar;