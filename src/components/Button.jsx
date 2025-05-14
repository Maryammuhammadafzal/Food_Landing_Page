import React from 'react'

const Button = ({borderColor = "border-[#9B1B30]" , textColor = "text-[#9B1B30]" , text = "Order Now !"}) => {
  let buttonClasses = `border-3 ${borderColor} ${textColor} px-10 font-semibold font-['Jost'] py-3 text-xl`
  return (
    <button className={`${buttonClasses}`}>
     {text}
    </button>
  )
}

export default Button
