import React from "react";
import Layout from "../components/Layout";

const Organizations = () => {
  return (
    <Layout>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/org.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl sm:text-7xl text-white font-bold text-shadow-lg/10">
              Organizations
            </h1>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-neutral-900 mx-auto text-justify text-xl px-8">
          Recognizing the profound cultural and biological significance of the
          Asong Gubat, the students of Adhikain Studios are not alone in their
          adhikain. They are proudly supported by Aso ng Gubat Genetic Breeders
          Association Inc., (AGGBA), an organization founded on the shared
          vision of bringing this primitive Filipino breed to global
          recognition.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 p-8">
        <img
          src="org2.JPG"
          alt="Organization"
          className="w-68 object-cover rounded-lg "
        />
        <div className="w-full text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-neutral-900 mb-3 md">
            The Foundation of AGGBA
          </h2>
          <p className="text-neutral-900 text-xl leading-relaxed text-justify">
            The movement to protect this "living archive of Philippine heritage"
            is often sparked by a deeply personal encounter. For Ms. Zenaida
            Jacaba, also known as Aida Espera, that moment began with a dog
            named 'Molly' found near a road in Bulacan. Six months after Molly's
            adoption, Ms. Jacaba saw the striking resemblance in Tom Asmus's
            YouTube videos, leading to an exchange of information and the
            eventual founding of the AGGBA with two other collaborators. Ms.
            Jacaba, now the current AGGBA Treasurer, proudly cares for five
            Asong Gubat: King, Queen, Mamanwa, Witchy, and Oriang.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Organizations;
