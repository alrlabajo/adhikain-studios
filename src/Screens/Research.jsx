import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

const furTypes = [
  {
    title: "Brindle",
    description:
      "This variant is considered the closest to a true wild breed due to its inherent aggressiveness and primitive instincts. It represents the predominant wild-blooded population found across the entire Philippine archipelago.",
    image: "/brindle.JPG",
  },
  {
    title: "Brown",
    description:
      "As the most common variety, this coat spans a wide spectrum, ranging from nearly pure white to deep, dark red-brown hues.",
    image: "/brown.jpg",
  },
  {
    title: "Black",
    description:
      "A known nocturnal hunter, this variant is a night stalker that hunts from behind the shadows. It is nearly as aggressive as the 'Witch Dog' type and is frequently identified by its signature trait: being often bobtailed.",
    image: "/black.JPG",
  },
  {
    title: "Piebald",
    description:
      "This particular Aso subtype is distinguished by a white base coat marked with clear, contrasting patches of brown or black.",
    image: "/piebald.JPG",
  },
  {
    title: "Merle or Spotted",
    description:
      'This variant is definitively classified as a member of the "rare" Witch Dog subtype.',
    image: "/merle.jpg",
  },
];

const History = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % furTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/research.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl sm:text-7xl text-white font-bold text-shadow-lg/10">
              Meet the Asong Gubat
            </h1>
            <p className="mt-4 text-xl text-white text-shadow-lg/10">
              The Dog, The Myth, The Legend
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div>
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center text-neutral-900">
            History
          </h1>

          <div className="space-y-6 text-justify text-neutral-900 text-lg px-8 py-8">
            <p>
              The Asong Gubat's history is shrouded in conflicting theories. One
              account suggests it is an ancient native, having existed between
              36,000 to 60,000 years ago. Furthermore, some connect it to the
              Polloc dogs—coined by Fr. Elera in Dr. Ian Alfonso's Dogs in
              Philippine History—though that same source describes Polloc dogs
              as distant relatives of the Spanish Mastiffs brought during the
              colonial era.
            </p>

            <p>
              A contrasting theory comes from the research of veterinary student
              Ceriam Sing (who accompanied pioneer Tom Asmus). Sing posits that
              the Asong Gubat actually originated in China, migrated to the
              Philippines, continued through Thailand and Indonesia, and then
              allegedly returned and settled permanently in the Philippines.
            </p>

            <p>
              Adding to the mystery, Tom Asmus himself alleges that the Asong
              Gubat is present everywhere in the Philippines, potentially
              inhabiting even the scattered islands in the Visayas.
            </p>
          </div>
        </div>

        <div className="relative w-full py-4 ">
          <div className="bg-yellow-950 w-full py-76 sm:py-44 md:py-32 lg:py-44"></div>

          <div className="absolute -top-0 sm:-top-2 md:-top-2 lg:-top-3 left-0 w-full h-full flex flex-col-reverse sm:flex-row items-center justify-center px-6">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/QUEEN.png"
                alt="Asong Gubat"
                className="w-66 sm:w-80 h-auto object-cover z-10"
              />

              <div className="absolute -top-10 md:-top-6 left-1/3 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg ">
                <p className="text-base font-medium whitespace-nowrap">
                  Here are some facts
                  <br />
                  you might want to know!
                </p>

                <div className="absolute bottom-0 left-8 transform translate-y-full">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-700"></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-neutral-50 max-w-2xl text-justify text-base lg:text-lg xl:text-xl pt-8">
                The most profound discovery about the subject is its
                classification. Pioneer Tom Asmus designated the Asong Gubat as
                a diverse complex of Philippine Canidae, which he collectively
                dubbed the “Aso species.” This recognition stems from the dog's
                many variations—including differences in coat length (short to
                medium), ear type (erect or floppy), and tail shape. This
                diversity also accounts for its regional names; for instance,
                the variant that inhabits the country's mountainous terrains is
                sometimes referred to as the Asong Bundok.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12">
          <img
            src="/dog1.JPG"
            alt="Asong Gubat howling"
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-lg md:rounded-none"
          />
          <div className="w-full md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 md">
              Unique Traits
            </h2>
            <p className="text-neutral-900 text-base leading-relaxed">
              It possesses a distinct, alleged ability to howl—a characteristic
              tied to their length. Its howl is notably unique. Pioneer
              researcher Tom Asmus recorded its vocalization as a form of
              "singing."
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 md">
              Cultural Significance
            </h2>
            <p className="text-neutral-900 text-base leading-relaxed">
              For the Monobo Tribe, the Asong Gubat is revered as a loyal
              companion to Babaylans (shamans) and is even considered a forest
              spirit whose howl announces or invites death. The belief that the
              Asong Gubat possesses shape-shifting abilities connects it
              directly to the Filipino mythos of the Aswang.
            </p>
          </div>
          <img
            src="/dog2.png"
            alt="Asong Gubat howling"
            className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-lg md:rounded-none"
          />
        </div>

        <div className="p-8 sm:p-16 space-y-14">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-neutral-900">
              Classifications of the Asong Gubat
            </h1>

            <p className="text-center text-neutral-700 text-lg">
              Pioneer Tom Asmus's research definitively established the
              existence of four distinct types within the Aso species:
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 text-left md:text-right">
              <h2 className="text-3xl font-bold text-neutral-900">Jungle</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                Characterized as a lean-built landrace—meaning a local variety
                developed and adapted over time—the dog typically features a red
                dominant brindle coat. Key physical traits are its symmetrical,
                leaf-shaped ears and a thin, long tail.
              </p>
            </div>
            <img
              src="/jungle.png"
              alt="Asong Gubat - Jungle"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/mountain.png"
              alt="Asong Gubat - Mountain"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-neutral-900">Mountain</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                This variant has a heavy or sturdy build and is distinguished by
                a dominantly black brindle coat. Key features include the
                largest ears (either with a straight inner edge or entirely
                drop-eared) and a thick, short tail.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 text-left md:text-right">
              <h2 className="text-3xl font-bold text-neutral-900">Tribal</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                Characterized by a tribal/mountain landrace body, this variant
                often displays distinct markings, such as a black dominant merle
                (mottled) or spotted coat. Its head features either symmetrical
                leaf-shaped or trapezoid-shaped ears, balanced by a thin tail.
              </p>
            </div>
            <img
              src="/tribal.png"
              alt="Asong Gubat - Tribal"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/rare.png"
              alt="Asong Gubat - Rare"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-neutral-900">Rare</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                This variant exhibits the greatest physical range, from a heavy
                to lean build and medium to miniature size. Its coat is highly
                diverse, including piebald, tan, cream, sable, black, or
                bi-color patterns, with textures from long-haired to
                double-coated. It typically features symmetrical, leaf-shaped
                ears and can present with a thin, thick, or bobtail.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-14">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-neutral-900">
              Body Types of Asong Gubat
            </h1>

            <p className="text-center text-neutral-700 text-lg">
              In his research, Tom Asmus found that cross-variant dogs are
              commonly referred to as "tribal." Lacking traditional genealogical
              records, he asserted that ear shape is the most reliable feature
              for determining the lineage and heritage of the diverse Aso
              species. Although there are already known variants, he also noted
              the different body types of an Aso species.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/body_jungle.png"
              alt="Asong Gubat - Jungle"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-neutral-900">Jungle</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                This specialized type possesses a tall, slender profile built
                for speed and power. Its distinctive anatomy—featuring a large
                dip in the spine behind the shoulders and long hip
                bones—facilitates its leaper and lunger hunting style. The
                profile is completed by a thin, elongated skull.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 text-left md:text-right">
              <h2 className="text-3xl font-bold text-neutral-900">Mountain</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                Representing over 75% of the population, this is the most common
                Asong Gubat type. It has a midsized, sturdy body profile
                structurally adapted for challenging environments. Key climbing
                features include a mid dip in the spine and long hip bones
                specifically designed for climbing rugged terrain.
              </p>
            </div>
            <img
              src="/body_mountain.png"
              alt="Asong Gubat - Mountain"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/body_lowland.png"
              alt="Asong Gubat - Lowland"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-neutral-900">Lowland</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                This variant is defined by an agile structure that facilitates
                movement. It features a wide and smoothly curved spine and a
                wedge-shaped skull. Its layered body is designed for superior
                performance, enabling the dog to both climb and leap
                effectively.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 text-left md:text-right">
              <h2 className="text-3xl font-bold text-neutral-900">Dwarf</h2>
              <p className="text-neutral-900 text-base leading-relaxed">
                This short-legged variant is renowned as a powerful digger,
                capable of excavating ground prey like lizards and rodents even
                in areas with a low center of gravity. Commonly raised by the
                Igorot people in Northern Luzon for hunting, this dog typically
                presents with a wedge-shaped skull and a coat that is
                cream/creme, black bobtail, or brindle.
              </p>
            </div>
            <img
              src="/body_dwarf.png"
              alt="Asong Gubat - Dwarf"
              className="w-56 object-cover rounded-lg md:rounded-none"
            />
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-16 overflow-hidden">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-neutral-900">
              Fur Types of Asong Gubat
            </h1>
            <p className="text-center text-neutral-700 text-lg">
              Beyond the various body structures, the Asong Gubat also displays
              a remarkable aesthetic range—a vibrant spectrum of coats noted
              across the species.
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${position * 33.33}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {[...furTypes, ...furTypes].map((fur, i) => (
                <div key={i} className="w-72 px-2 flex-shrink-0">
                  <div className="bg-yellow-950 rounded-2xl p-4 shadow-md h-full flex flex-col">
                    <img
                      src={fur.image}
                      alt={fur.title}
                      className="w-66 h-66 object-cover rounded-lg"
                    />
                    <h3 className="text-center text-lg font-medium text-yellow-100 py-3">
                      {fur.title}
                    </h3>
                    <p className="text-sm text-yellow-50 text-justify">
                      {fur.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-14">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-neutral-900">
              Tail Structure of Asong Gubat
            </h1>

            <p className="text-center text-neutral-700 text-lg">
              Moving from fur to form, the Aso species exhibits just as much
              variation in its tails, which serve as crucial identifiers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/MOUNTAINTAIL.png"
                alt="Asong Gubat Mountain"
                className="w-56 h-56"
              />
              <h3 className="text-center text-neutral-950 font-bold text-lg py-4">
                Mountain
              </h3>
              <p>
                This variation is marked by a thicker, shorter tail, a build
                specifically associated with and potentially utilized for
                powerful pounce hunting.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/JUNGLETAIL.png"
                alt="Asong Gubat Jungle"
                className="w-56 h-56"
              />
              <h3 className="text-center text-neutral-950 font-bold text-lg py-4">
                Jungle
              </h3>
              <p>
                This variation features a thin and long tail, a physical trait
                considered ideal for lunge hunting.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/BOBTAIL.png"
                alt="Asong Gubat Bobtail"
                className="w-56 h-56"
              />
              <h3 className="text-center text-neutral-950 font-bold text-lg py-4">
                Bobtail
              </h3>
              <p>
                A key identifying feature is the shortened, stub kind of tail,
                which ranges from a quarter to three-quarters the average length
                and is particularly common in the Black Aso variety.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-14">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-neutral-900">
              Nail Structure of Asong Gubat
            </h1>

            <p className="text-center text-neutral-700 text-lg">
              Finally, extending to the very extremities, the Aso species
              completes its diverse profile with distinct variations in its claw
              arches. These arches, which can serve as a blend identifier,
              include:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-950 flex items-center justify-center flex-col p-8">
              <img src="/jungle_nail.png" alt="Jungle Nail" className="w-36" />
              <h3 className="text-center font-bold text-neutral-50 text-lg py-4">
                Jungle Type
              </h3>
              <p className="text-sm text-yellow-50 text-justify">
                Characterized by the longest claws with a shallow 30-degree arc.
              </p>
            </div>
            <div className="bg-yellow-950 flex items-center justify-center flex-col p-8">
              <img
                src="/lowland_nail.png"
                alt="Lowland Nail"
                className="w-36"
              />
              <h3 className="text-center font-bold text-neutral-50 text-lg py-4">
                Lowland Type
              </h3>
              <p className="text-sm text-yellow-50 text-justify">
                Features the shortest claws with a wide 70-degree arc, giving
                them a feline-like appearance.
              </p>
            </div>
            <div className="bg-yellow-950 flex items-center justify-center flex-col p-8">
              <img
                src="/mountain_nail.png"
                alt="Mountain Nail"
                className="w-36"
              />
              <h3 className="text-center font-bold text-neutral-50 text-lg py-4">
                Mountain Type
              </h3>
              <p className="text-sm text-yellow-50 text-justify">
                Represents the most common variety, identified by a moderate
                45-degree arc.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-neutral-900 mx-auto text-justify text-lg px-8">
            The sheer scale of this complexity—from a coat that can be nearly
            white to a body engineered for climbing rugged terrain, and the
            debate over a 60,000-year history—proves the Asong Gubat is not just
            a dog; it is a dynamic, living archive of Philippine heritage. It is
            this incredible, multifaceted, and still mysterious creature that
            Adhikain Studios is determined to protect, ensuring the recognition
            of the Philippine Forest Dog's identity and its right to survival
            through the compelling power of art.
          </p>
        </div>
      </div>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/research3.JPG')" }}
      >
        <div className="absolute inset-0 bg-amber-950/30 flex items-center justify-center min-h-screen">
          <div className="text-center px-4">
            <p className="mt-4 text-2xl text-white text-shadow-lg/10 italic">
              "Aso are a very ancient breed, having lived here for 30,000 -
              150,000 Years that appeared to have ties with the Negrito Tribes
              which were the first sundaland people who inhabited South East
              Asia”.<br /><span className="font-bold">- Asmus, 2018</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
