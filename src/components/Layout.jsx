import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
