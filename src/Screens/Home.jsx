import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div
        className="relative min-h-screen flex items-center bg-cover bg-center sm:bg-[center_bottom_-8rem] lg:bg-[center_bottom_-14rem] p-8 sm:p-16"
        style={{ backgroundImage: "url(/landing.JPG)" }}
      >
        <div className="absolute inset-0 bg-lime-800/20">
          <div className="w-full max-w-6xl text-left p-8 sm:p-16">
            <h1 className="text-5xl sm:text-7xl text-white font-bold pt-20 text-shadow-lg/10">
              The Bark of
              <br />
              the Forest
              <br /> Lives On.
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-white max-w-3xl text-shadow-lg/10">
              The Philippines’ Hidden, Living Legacy.
              <br />
              Our Creative Call to Action.
            </p>
            <div className="mt-6">
              <button className="bg-green-900 text-white px-6 py-3 rounded-full text-base hover:bg-green-800 transition duration-300">
                Explore the mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
