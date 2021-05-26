import React from 'react'

const GradientSVG2 = (props: any) => {
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient
          id="gradientSVG2"
          x1="61.9048"
          y1="9.4762"
          x2="11.4286"
          y2="62.8095"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.167904" stopColor="#F7E997" />
          <stop offset="0.41413" stopColor="#FFF4C4" />
          <stop offset="0.731464" stopColor="#FADD72" />
          <stop offset="1" stopColor="#B6913B" />
        </linearGradient>
        {/* <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor="#255A67" />
          <stop offset="2%" stopColor="#071F2B" />
          <stop offset="50%" stopColor="#274344" />
          <stop offset="150%" stopColor="#B2CED1" />
        </linearGradient> */}
      </defs>
    </svg>
  )
}

export default GradientSVG2
