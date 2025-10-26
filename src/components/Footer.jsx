import React from "react";
import { IoIosPaw } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-900 text-white p-4 text-center">
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <IoIosPaw className="inline-block" size={36} />
            <h1 className="schoolbell-regular text-lg">Project Adhikain</h1>
          </div>
        </div>
        <p className="schoolbell-regular text-xs">&copy; 2025 Project Adhikain. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
