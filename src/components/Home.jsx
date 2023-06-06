import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { GoMarkGithub } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);
  return (
    <div
      name="home"
      className="max-w-screen md:w-full  mx-auto pt-10 md:pt-28 bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen md:max-w-screen-lg  mx-auto grid lg:grid-cols-2 items-center">
        <div
          className="px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I'm <br />{" "}
            <span className=" text-blue-400 animate-none md:animate-pulse z-0 ">
              Arun Saradgi
            </span>
            <br /> Full Stack Web Developer
          </h2>
          <p className="text-gray-500 text-xl py-4 font-medium max-w-screen-sm">
            Experienced full stack web developer proficient in front-end and
            back-end technologies. Expertise in HTML, CSS, JavaScript, React,
            Redux, Node. Committed in delivering high-quality, user-centric web
            applications.
          </p>

          <div className="max-w-screen-lg mx-auto ">
            <div
              className="max-w-screen-sm flex justify-center items-center space-x-8"
              data-aos="fade-up"
            >
              <div>
                <a href="https://github.com/arunsaradgi" target="_blank">
                  <GoMarkGithub size="38px" color="white" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/arunsaradgi/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    width="38px"
                    alt=""
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://drive.google.com/file/d/1tRkUXlOCqF9ENZZH3wk5JbYAcPkKrTU0/view?usp=sharing"
                  smooth
                  target="_blank"
                  className="group text-white w-fit px-6 py-2 my-2 text-sm overflow-hidden flex items-center rounded-md bg-gradient-to-r from-orange-400 to-green-500 cursor-pointer md:py-3"
                >
                  SEE MY RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mx-auto rounded-2xl w-8/12 object-cover object-center md:w-11/12  lg:w-11/12 "
          src={HeroImage}
          alt="logo"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Home;
