import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[calc(100vh-3rem)]">
     <p>Page not found</p>
      <Link to='/' className="text-bold p-4 text-white bg-blue-600 rounded-lg flex items-center gap-3"> <IoArrowBack size={30} className="ease-out"/> Back to Home</Link>
      
    </div>
  );
};

export default NotfoundPage;
