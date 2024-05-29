import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between h-12 bg-[#172448] items-center px-4 lg:px-20">
      {/* Normal sceen */}
      {/* logo */}
      <div>
        <span>CryptoValut</span>
      </div>
      {/* left links */}
      <div className="flex items-center gap-4">
        <ul className=" hidden md:flex gap-4">
          <Link to='/'>Home</Link>
          <Link>News</Link>
          <Link>Explore</Link>
          <Link>Sign up</Link>
        </ul>
        <select className="p-3 outline-4 rounded-md hidden md:block items-center bg-transparent">
          <option value="select">Currency</option>
          <option value="usd">USD</option>
          <option value="euro">EUR</option>
          <option value="ksh">KSH</option>
        </select>
      </div>
      {/* mobile screen */}
      {!open ? (
        <IoMenu
          className="md:hidden"
          size={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <IoClose
          size={30}
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
      {open && (
        <div className=" md:hidden absolute top-12 right-0 bg-[#172448] h-[440px] w-[240px] border-t-2 border-gray-500 z-10 flex flex-col gap-8 cursor-pointer list-none justify-center items-center">
          <li onClick={() => setOpen((prev) => !prev)}>Home</li>
          <li onClick={() => setOpen((prev) => !prev)}>News</li>
          <li onClick={() => setOpen((prev) => !prev)}>Explore</li>
          <li onClick={() => setOpen((prev) => !prev)}>Sign up</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
