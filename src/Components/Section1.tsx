import React from "react";
import Section2 from "./Section2";
import profileimg from "../images/data.jpeg";

export default function Section1() {
  // let iconwidth=true;
  return (
    <div>
      <h2 className="pl-3 text-[20px]  md:text-[30px] pr-3 font-bold md:font-semibold pt-10 md:pl-[300px]">
        FurnLux - Furuniture Landing Page Design
      </h2>
      <section className="pt-6 pb-6 ">
        <section className="flex flex-row justify-around md:justify-start md:pl-[300px]">
          <section className="flex items-center justify-center ">
            <div className="rounded-full overflow-hidden">
              <img src={profileimg} className="w-10 h-10 md:w-16 md:h-16" />
            </div>
          </section>
          <section className="leading-4 md:pl-[20px] md:gap-2 md:flex md:flex-col md:justify-center md:items-center">
            <span className="font-bold  text-[12px] md:text-[18px]">Rifat Khandakar</span>
            <p className="text-[#21b16d] text-[12px] md:text-[16px]">Available for work</p>
          </section>
          <section className="flex flex-row gap-2 md:pl-[700px]">
            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full border-2 border-gray">
              <div className="w-4 h-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  role="img"
                  className="icon "
                >
                  <path
                    d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full border-2 border-gray">
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  role="img"
                  className="icon "
                >
                  <path
                    d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center bg-black w-8 h-8 rounded-full border-1 border-gray">
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  className="icon text-white "
                >
                  <path
                    d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Section2 />
    </div>
  );
}
