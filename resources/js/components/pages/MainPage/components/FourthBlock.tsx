import React from 'react'

import s from './FourthBlock.scss'

const FourthBlock = () => {
  return (
    <div className={s.container}>
      <img src="/images/program.png" alt="" className={s.back_img} />
      <div className={s.center}>
        <div className={s.title}>Программа дня:</div>
        <div className={s.subtitle}>
          16:30 - Сбор гостей
          <br />
          17:00 - Церемония
          <br />
          20:30 - Вынос торта
          <br />
          21:00 - Свободная программа
        </div>
      </div>
    </div>
  )
}

export default FourthBlock
