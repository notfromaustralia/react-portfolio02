import React from 'react';
import {
  FaCss3,
  FaDatabase,
  FaDownload,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import MyCV from '../assets/cv/BoikhutsoCV.pdf';

const Skills = () => {
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('BoikhutsoCV.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'BoikhutsoCV.pdf';
        alink.click();
      });
    });
  };
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-gradient-to-r from-[#111827] to-[#240b36] text-gray-200"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div>
          <p className="text-4xl border-b-4 inline-block border-[#7c339c] font-bold ">
            Skills & Experience
          </p>
          <p className="py-4">
            Here are some technologies that I am competent in.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-6">
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaHtml5 className="mx-auto" size={75} />
            <p className="my-2">HTML</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaCss3 className="mx-auto" size={75} />
            <p className="my-2">CSS</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaJs className="mx-auto" size={75} />
            <p className="my-2">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaPython className="mx-auto" size={75} />
            <p className="my-2">Python</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaDatabase className="mx-auto" size={75} />
            <p className="my-2">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaJava className="mx-auto" size={75} />
            <p className="my-2">Java</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaLinux className="mx-auto" size={75} />
            <p className="my-2">Linux</p>
          </div>
          <div className="shadow-md shadow-[#7c339c] hover:scale-110 duration-300">
            <FaReact className="mx-auto" size={75} />
            <p className="my-2">React</p>
          </div>
        </div>
        <div className=" flex justify-end">
          <a href={MyCV} target="_blank" rel="noreferrer">
            <div className="flex gap-2 px-4 py-4 border hover:bg-[#7c339c]">
              Download CV
              <FaDownload />{' '}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
