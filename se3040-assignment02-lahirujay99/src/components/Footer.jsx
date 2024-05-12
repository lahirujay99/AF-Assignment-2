import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
        <div className="">
          <h3 className="text-2xl font-bold text-[#41A4FF]">Astronomy</h3>
          <p className="py-4">
            Explore the boundless wonders of the universe through our extensive
            collection of mesmerizing media galleries.
          </p>
        </div>
        <div className="flex md:justify-around justify-start mt-8">
          <div>
            <h6 className="font-bold text-[#41a3ff]">Services</h6>
            <ul className="mt-2 font-light">
              <li className="py-2 text-sm">Astronomy Pic</li>
              <li className="py-2 text-sm"> Pic of the Day</li>
              <li className="py-2 text-sm">Media Search</li>
            </ul>
          </div>
          <div className="ml-[8rem]">
            <h6 className="font-bold text-[#41A4FF]">Support</h6>
            <ul className="mt-2 font-light">
              <li className="py-2 text-sm">Contact us</li>
              <li className="py-2 text-sm">About us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
