import React from 'react'

import s from './FirstBlock.scss'

const FirstBlock = () => {
  return (
    <div className={s.container}>
      {/* <img src="/images/image1.png" alt="" className={s.img1} />
      <img src="/images/image2.png" alt="" className={s.img2} /> */}
      <img src="/images/logo2.png" alt="" className={s.logo} />
    </div>
  )
}

export default FirstBlock
