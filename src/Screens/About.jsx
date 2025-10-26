import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const About = () => {
  const cardData = [
    { name: "Luisa Atienza", imgSrc: "/WISA.png" },
    { name: "Jeremie Dayrit", imgSrc: "/JE.png" },
    { name: "Janxent Fernandez", imgSrc: "/XENT.png" },
    { name: "Robin Gislan", imgSrc: "/BIN.png" },
    { name: "Angelina Labajo", imgSrc: "/INAH.png" },
    { name: "Andrea Victorio", imgSrc: "/DREA.png" },
  ];
  return (
    <Layout>
      <div className=" bg-neutral-50 min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full space-y-8 my-28">
          <h1 className="text-5xl font-bold text-neutral-900 ">
            Meet the Pack
          </h1>
          <p className="text-lg text-center px-4 sm:px-36 md:px-64 lg:px-72 text-neutral-700 ">
            Adhikain Studios is nothing without the talents behind it. Their
            capabilities span the full creative spectrum: from print and digital
            media to bold, exploratory tactics like guerrilla ad marketing.
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 px-4 sm:px-8 md:px-16">
            {cardData.map((member, index) => (
              <Card key={index} name={member.name} imgSrc={member.imgSrc} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-neutral-900 items-start w-full px-6 lg:px-24 py-12 sm:py-24 lg:py-36 gap-8">
          <div className="lg:w-2/3 text-white p-6">
            <h1 className="text-5xl font-bold leading-tight text-shadow-lg">
              Adhikain Studios
            </h1>
            <p className="mt-6 lg:text-lg text-justify text-shadow-xl">
              Fuelled by a shared ambition, Adhikain Studios is a dynamic
              collective of 4th-year Visual Communication students who have
              pooled their diverse talents to shed light on the mystical Asong
              Gubat. Drawing its name from "adhikain" (to unite for a common
              cause), the studio exists to vividly showcase this creature and
              prove the compelling potential of art as a tool for advocacy.
            </p>
          </div>

          <div className="p-6">
            <div className="bg-lime-700/95 p-6  text-white w-full">
              <h1 className="text-7xl font-bold">
                Who
                <br />
                Are
                <br />
                We?
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <img
            src="/pic1.png"
            alt="Logo"
            className="w-full aspect-square object-cover"
          />
          <img
            src="/pic2.jpg"
            alt="Logo"
            className="w-full aspect-square object-cover"
          />
          <img
            src="/pic3.jpg"
            alt="Logo"
            className="w-full aspect-square object-cover"
          />
        </div>
        <p className="max-w-4xl text-justify px-6 py-12 text-lg ">
          Our journey began with a single question ignited by a mentor: Why is a
          dog showcased on national TV still a mystery? Despite appearances on
          programs like GMA's Dapat Alam Mo! and I-Witness, the Asong Gubat's
          story is incomplete. We found that the movement to make it the
          National Dog is weakened by a lack of deep research, with its genetic
          purity still under debate. This isn't just a research project; it's a
          rescue mission. We committed to digging past the surface level to
          gather undeniable proof. Our ultimate goal is to ensure the Asong
          Gubat is recognized not just as a native breed, but as a living
          cultural heritage of the Philippines.
        </p>
      </div>
    </Layout>
  );
};

export default About;
