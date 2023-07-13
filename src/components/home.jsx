import { React, useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import HeaderSvg from '../assets/svgs/header-img.svg';
import { motion, useInView, useAnimation } from 'framer-motion';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full md:h-screen bg-gradient-to-r from-[#111827] to-[#240b36]"
    >
      <div className="max-w-[100%] mx-auto py-40 lg:px-40 sm:px-4 flex justify-between h-full">
        <div className="lg:max-w-[50%] flex-col justify-center">
          <p className=" text-md text-blue-400"> Hi, my name is</p>
          <h1 className="text-4xl sm:text-4xl text-white">
            Boikhutso Sydney Baitseng
          </h1>
          <h2 className="text-5xl font-bold text-[#817d8f]">
            I'm a Full Stack Developer.
          </h2>
          <p className="py-4 text-[#817d8f]">
            I am passionate about designing software applications and digital
            experiences that are both visually stunning and intuitive, and
            always strive to create designs that delight and engage users.
          </p>
          <div className="">
            <button className="text-white group py-4 px-4 border flex items-center hover:bg-[#7c339c] rounded-md">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-[50% flex justify-end">
          <img className="animate-bouncing" src={HeaderSvg} alt="Your SVG" />
        </div>
      </div>
    </div>
  );
};

export default Home;
