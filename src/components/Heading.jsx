import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Heading = ({text}) => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);
  return (
    <h2 data-aos="fade-down" className='font-bold text-5xl px-2  text-orange-500 font-["Lobster"] tracking-wider my-2 max-sm:text-3xl max-sm:font-medium max-sm:text-center'>
      {text}
    </h2>
  )
}

export default Heading
