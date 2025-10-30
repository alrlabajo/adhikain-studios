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
          adhikain. They are proudly supported by{" "}
          <span className="font-bold">
            Aso ng Gubat Genetic Breeders Association Inc., (AGGBA)
          </span>
          , an organization founded on the shared vision of bringing this
          primitive Filipino breed to global recognition.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 p-8">
        <img
          src="org2.JPG"
          alt="Organization"
          className="w-68 object-cover rounded-lg "
        />
        <div className="w-full text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-neutral-900 mb-3">
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
      <div>
        <h2 className="text-4xl text-center font-bold text-neutral-900">
          Documented Asong Gubat
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 1.jpg"
            alt="Molly"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            Molly
          </h3>
          <p>0 Generation</p>
        </div>
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 2.JPG"
            alt="Witchy"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            Witchy
          </h3>
          <p>0 Generation</p>
        </div>
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 3.JPG"
            alt="Oriang"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            Oriang
          </h3>
          <p>2nd Generation</p>
        </div>
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 6.JPG"
            alt="Queen"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            Queen
          </h3>
          <p>3rd Generation</p>
        </div>
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 4.JPG"
            alt="Mamanwa"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            Mamanwa
          </h3>
          <p>3rd Generation</p>
        </div>
        <div className="p-8 flex items-center justify-center flex-col space-y-2">
          <img
            src="/ASO 5.jpg"
            alt="King"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <h3 className="text-center text-neutral-950 font-bold text-lg">
            King
          </h3>
          <p>3rd Generation</p>
        </div>
      </div>
      <div className="py-8">
        <p className="text-neutral-900 mx-auto text-center text-xl px-8">
          Join the Movement. The Asong Gubat's story is still being written, and
          we need your help to protect this vital piece of Philippine heritage.
          To learn more, collaborate with the student advocates, or support the
          preservation of the "Aso species," connect with us today.
        </p>
      </div>
    </Layout>
  );
};

export default Organizations;
