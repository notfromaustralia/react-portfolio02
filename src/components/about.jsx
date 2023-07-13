import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-[#111827] to-[#240b36] text-gray-200"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#7c339c]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hello there, Sydney here! Thanks for stopping by, feel free to
              look around.
            </p>
          </div>
          <div className="">
            <p>
              I am a highly motivated individual with a bachelor’s degree in
              information technology from the University of Botswana. My studies
              have provided me with a strong foundation in programming, coding,
              and various IT-related skills. As a Systems and Software
              developer, I have also gained valuable customer service and
              teamwork experience while working with clients and colleagues. I
              am passionate about leveraging these skills to contribute to the
              field of Information Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
