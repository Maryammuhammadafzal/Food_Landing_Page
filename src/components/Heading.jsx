import React from 'react'

const Heading = ({text}) => {
  return (
    <h2 className='font-bold text-5xl text-orange-500 font-["Lobster"] tracking-wider my-2 max-sm:text-3xl max-sm:text-center'>
      {text}
    </h2>
  )
}

export default Heading
