import React from "react";

const Contact = () => {
  let contact_data = [
    {
      name: "Address:",
      link: "3891 Ranchview Dr. Richardson, California 62639",
    },
    {
      name: "Send Email:",
      link: "Info@gmail.com",
    },
    {
      name: "Call Emergency:",
      link: "+88 (308) 555-0121",
    },
  ];
  return (
    <div className="w-full h-[100px] flex justify-evenly items-center bg-orange-400 text-white max-sm:flex-wrap max-sm:h-auto max-sm:gap-5 py-4">
      {contact_data.map(({ name, link }) => (
        <div key={name} className="w-[200px] flex flex-col gap-2 max-sm:w-full max-sm:px-2">
          <h3 className="font-semibold text-2xl">{name}</h3>
          <a href="{link}" className="text-[14px]">{link}</a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
