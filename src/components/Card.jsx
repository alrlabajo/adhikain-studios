import React from "react";

const Card = ({ name, imgSrc, props }) => {
  return (
    <div
      {...props}
      className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group w-44 h-64 cursor-pointer"
    >
      <img
        src={imgSrc}
        alt={name}
        className="transition-transform group-hover:scale-115 duration-200 w-full h-64 object-cover"
      />
      <div
        className="absolute inset-0 flex items-end justify-center
                bg-gradient-to-t from-green-900/90 via-green-900/10 to-transparent"
      >
        <h2 className="text-base font-bold text-white text-center p-4 fustat-bold">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
