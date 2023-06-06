import React from "react";

import landingbewakoof from "../assets/portfolio/Bewakoof/Landing.png";
import landingnykaa from "../assets/portfolio/Nykaa/Landing.png";

import ImageSlider from "./ImageSlider";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  let style_md =
    "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div
      name="projects"
      className="bg-gradient-to-b to-black   from-gray-800 w-full text-white pt-32 pb-32"
    >
      <div className="max-w-screen-lg mx-auto p-2 " data-aos="fade-right">
        <p className="text-4xl  uppercase font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
      </div>
      {/* bewakoof */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden" data-aos="fade-up">
              <ImageSlider data={landingbewakoof} imgStyle={style_md} />
            </div>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              CartKing
            </h1>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              An E-Commerce Website
            </h1>

            <p
              className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"
              data-aos="fade-right"
            >
              Lifestyle is India's leading fashion destination for the latest
              trends.Lifestyle brings multiple categories including men, women
              and kids’ apparel, footwear, handbags, fashion accessories and
              beauty under the convenience of a single roof.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
              <div>
                <SiHtml5
                  size="32px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiJavascript
                  size="32px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              {/* <div>
                <SiReact
                  size="32px"
                  color="#61DBFB"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div> */}
              <div>
                <SiCss3
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              {/* <div>
                <SiRedux
                  size="32px"
                  color="#764abc"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div> */}
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/arunsaradgi/whole-bike-5407"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://steady-platypus-c929d3.netlify.app/"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a
              href="https://steady-platypus-c929d3.netlify.app/"
              target={"_blank"}
            >
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src={landingbewakoof}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      {/* nykaa */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden">
              <ImageSlider
                data={landingnykaa}
                imgStyle={style_md}
                data-aos="fade-up"
              />
            </div>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              Nykaa
            </h1>
            <h1
              className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              An E-Commerce Website
            </h1>
            <p
              className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"
              data-aos="fade-right"
            >
              Nykaa is an E-commerce site. This is a shopping website of
              cosmetic products belongs to women such as makeup product,
              lipstick, eyeliner, sunscreen ans many more.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
              <div>
                <SiJavascript
                  size="32px"
                  color="yellow"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiHtml5
                  size="32px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiCss3
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/0AvinashMohanDev1/acidic-blade-1610"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://ornate-crisp-dcdfaa.netlify.app/"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a
              href="https://ornate-crisp-dcdfaa.netlify.app/"
              target={"_blank"}
            >
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src={landingnykaa}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
