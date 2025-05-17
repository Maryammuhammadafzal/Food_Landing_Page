import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SubHeading = ({text}) => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);
  return (
   <h4 data-aos="fade-down" className='text-red-500 text-lg capitalize max-sm:text-[16px]'>{text}</h4>
  )
}

export default SubHeading
