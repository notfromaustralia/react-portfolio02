import React from 'react';
import ModisarProj from '../assets/images/modisar.png';
import LegaeAgency from '../assets/images/legaeAgency.png';
import Park27 from '../assets/images/park27.png';
import SomolekaeAssociates from '../assets/images/somolekae.png';
import MaintenanceApp from '../assets/images/m0.jpg';
import BloodDonate from '../assets/images/bd0.jpg';
const Work = () => {
  function WorkCard(props) {
    return (
      <div
        style={{ backgroundImage: `url(${props.bgImage})` }}
        className="shadow-lg shadow-[#7c339c] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effect */}
        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white">{props.title}</span>
          <p className="text-sm text-center px-4">{props.description}</p>
          <div className="pt-8 text-center">
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-50 text-stone-600 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-50 text-stone-600 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      name="work"
      className="w-full bg-gradient-to-r from-[#111827] to-[#240b36] text-gray-200"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto h-full flex flex-col p-4"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 inline-block border-[#7c339c]">
            Recent Work
          </p>
          <p className="py-4">
            Below are a couple of projects I have worked on recently.
          </p>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {/* Work card */}
          <WorkCard
            bgImage={ModisarProj}
            title="Modisar Web App"
            description="A livestock management and tracking solution built using HTML,CSS and Javascript"
          />
          <WorkCard
            bgImage={LegaeAgency}
            title="Legae Agency Web App"
            description="A real estate management solution built using django"
          />
          <WorkCard
            bgImage={Park27}
            title="Park 27"
            description="A restaurant and bar UI design built using HTML,CSS and Javascript"
          />
          <WorkCard
            bgImage={SomolekaeAssociates}
            title="Somolekae Associates"
            description="A law firm website built using HTML,CSS and Javascript"
          />
          <WorkCard
            bgImage={MaintenanceApp}
            title="Maintenance App"
            description="A mobile app that assigns tasks to IT technicians and logs any issues or fix requests built using Flutter"
          />
          <WorkCard
            bgImage={BloodDonate}
            title="Blood Donation App"
            description="A mobile app built using Flutter that helps users find the nearest blood bank to donate and request for blood donations."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
