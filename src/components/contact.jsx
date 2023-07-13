import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-r from-[#111827] to-[#240b36] text-gray-300"
    >
      <div
        data-aos="fade-up"
        className="max-w-[100%] py-10 px-4 lg:px-48 md:h-full"
      >
        <p className="text-4xl border-b-4 inline-block border-[#7c339c]">
          Contact Me
        </p>
        <p className="mt-4 font-thin">
          Fill in the form below OR shoot me an email to get in touch with me.{' '}
          <br />
          Email: [<i>baitsengboikhutso@yahoo.com</i>]
        </p>
        <form action="" method="post">
          <div className="py-10 grid md:grid-cols-2 gap-4">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Surname" />
            <input type="text" name="" id="" placeholder="Email" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="20"
              rows="10"
              className="md:hidden"
            ></textarea>
            <input className="sm:hidden" type="text" placeholder="Message" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="py-4 px-4 border rounded-md hover:bg-[#7c339c]">
              Let's Collaborate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
