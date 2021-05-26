import React from 'react'

const GradientSVG = (props: any) => {
  const { startColor, endColor, idCSS, rotation } = props

  const gradientTransform = `rotate(250deg)`

  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient
          id={idCSS}
          x1="62.381"
          y1="-48.5106"
          x2="-47.6631"
          y2="-10.8831"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0123297" stopColor="#255A67" />
          <stop offset="0.362899" stopColor="#071F2B" />
          <stop offset="0.60511" stopColor="#274344" />
          <stop offset="1" stopColor="#B2CED1" />
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

export default GradientSVG
