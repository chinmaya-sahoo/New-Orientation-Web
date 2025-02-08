import { Menu, X } from "lucide-react";
import { Link , NavLink} from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
 const navItems = [
   { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Achievements", href: "/achievements" },
    { label: "Testimonials", href: "/testimonials" },
    // { label: "Login", href: "/login" },
    // { label: "Sign Up", href: "/signup" },
  ];
  
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <img className="h-10 w-10 mr-2" src="/iic_logo.png" alt="Logo" />
            <span className="text-xl tracking-tight">IIC</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <NavLink to="/signup" className="py-2 px-3 border rounded-md">
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Login
            </NavLink>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <NavLink to="/signup" className="py-2 px-3 border rounded-md">
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
