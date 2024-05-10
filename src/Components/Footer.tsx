import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#f0f0f0] flex justify-center pr-4">
      <footer className="flex md:gap-8  pt-[100px] pb-[100px] ">
        <div className="pl-5">
          <h5 className="font-bold text-[8px]">FurniLux</h5>
          <p className="md:text-[8px] text-[6px] ">Designing Dreams Crafting Comfort</p>
          <ul>
            <li className="md:text-[8px] text-[6px]">
              {" "}
              <span >+00 123 123</span>
            </li>
            <li className="md:text-[8px] text-[6px]">
              {" "}
              <span >furnilux@businss.com</span>
            </li>
            <li className="md:text-[8px] text-[6px]">
              {" "}
              <span >
                123 Homestd Lane, Suite
                <br />
                456 Civil, United Interiors{" "}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[8px]">About Us</h5>
          <ul>
            <li className="md:text-[8px] text-[6px]">About us</li>
            <li className="md:text-[8px] text-[6px]">Blog</li>
            <li className="md:text-[8px] text-[6px]">Contact us</li>
            <li className="md:text-[8px] text-[6px]">Popular question</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[8px]">What's Popular</h5>
          <ul>
            <li className="md:text-[8px] text-[6px]">King size beds</li>
            <li className="md:text-[8px] text-[6px]">Sofas</li>
            <li className="md:text-[8px] text-[6px]">Charirs</li>
            <li className="md:text-[8px] text-[6px]">Decorative Lamp</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[8px]">Get 15% off your first Order!</h5>
          <p className="md:text-[8px] text-[6px]">
            Subscribe our news letter and get discount for
            <br />
            your first order! also recieve updates and more{" "}
          </p>
          {/* <input type="text" placeholder="Email Address" /> */}
        </div>
      </footer>
    </div>
  );
}
