import React from "react";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="w-full h-screen max-xl:h-auto max-xl:py-3 flex items-center text-white">
      <div className="w-full  h-auto  max-md:h-auto bg-image">

        <div className="content w-full p-5 max-md:gap-8 flex max-md:flex-col justify-between items-center h-full">
        {/* Content */}
          <div className="rightContent flex max-md:w-full max-md:p-0 max-md:items-center justify-start items-start w-[50%] pl-12 flex-col">
            <h4 className="text-white text-xl pl-3 font-semibold capitalize">Customer Testimonials 😍</h4>
            <h1 className="text-5xl font-medium max-lg:text-5xl max-md:text-5xl max-sm:text-3xl  max-md:text-center font-['Lobster'] my-7 ">
              What Our Customers Say
            </h1>
          <div className="w-full mt-2 h-auto max-md:justify-center flex">
                  <Button borderColor="border-white" textColor="text-white" text="Read More"/>
          </div>
          </div>
          {/* Image */}
          <div className="rightimg  w-[50%] p-5 max-md:w-full h-auto  flex justify-start max-md:justify-center items-center">
          <TestimonialCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial
