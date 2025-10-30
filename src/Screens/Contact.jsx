import React from "react";
import Layout from "../components/Layout";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div
        className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 space-y-8 lg:space-y-0 lg:space-x-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/forest.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col sm:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-1/2 items-start space-y-2 text-left text-white px-6 sm:px-6 md:px-6 lg:px-24">
            <h1 className="text-7xl xl:text-8xl ">Get in Touch</h1>
            <p className="text-base">
              We would love to hear from you! Whether you have questions about
              our projects, want to collaborate, or just want to say hello, feel
              free to reach out to us through any of the following channels:
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 items-start space-y-6 text-left text-white px-6 sm:px-6 md:px-6 lg:px-24 text-shadow-lg/20">
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
              <IoMdMail size={24} className="text-white" />
              <a
                href="mailto:adhikainstudios25@gmail.com"
                className="hover:underline"
              >
                adhikainstudios25@gmail.com
              </a>
            </div>
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
              <FaFacebook size={24} className="text-white" />
              <a
                href="https://www.facebook.com/groups/765562040802770/?rdid=MIVXRBl0nUT26Hef&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F17f1u9wss7%2F#"
                className="hover:underline"
              >
                Aso ng Gubat Genetic Breeders Association Inc. (AGGBA)
              </a>
            </div>
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
              <FaFacebook size={24} className="text-white" />
              <a
                href="https://www.facebook.com/adhikainstudios"
                className="hover:underline"
              >
                Adhikain Studios
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
