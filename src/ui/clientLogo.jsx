import React from "react";

const ClientLogos = () => {
  const logos = [
    "https://via.placeholder.com/150", // Replace with your client logo URLs
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-8">
      <div className="logos-wrapper flex items-center justify-between move-logos">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-20 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
