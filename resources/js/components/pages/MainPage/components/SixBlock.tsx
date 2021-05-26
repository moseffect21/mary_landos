import React from 'react'

import s from './SixBlock.scss'

const SixBlock = () => {
  return (
    <div className={s.container}>
      <img src="/images/bottom_hueta.png" alt="" />
      <div className={s.txt}>
        Уважаемые гости, хотим напомнить, что данное мероприятие - не детский праздник. Будем
        признательны, если вам не составит труда быть на празднике без детей.
        <br />
        Спасибо за понимание
      </div>
      <img src="/images/bottom_hueta.png" alt="" className={s.img2} />
    </div>
  )
}

export default SixBlock
