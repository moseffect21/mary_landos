import React from 'react'

import s from './ThirdBlock.scss'

const ThirdBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Дорогие наши гости!</div>
      <div className={s.subtitle}>
        Приглашаем вас на торжество, посвященное нашему бракосочетанию
      </div>
      <div className={s.addr_container}>
        <div className={s.addr}>в 16:30 ресторан “Маринад” Вурнарское шоссе, 11 корп. 2</div>
        <div className={s.addr}>25 июня 2021 года</div>
      </div>
      {/* <img src="/images/image5.png" alt="" className={s.back_img} /> */}
    </div>
  )
}

export default ThirdBlock
