import React from 'react'

import s from './DressCodeBlock.scss'

const DressCodeBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Dress-Code</div>
      <div className={s.subtitle}>
        Для нас главное - ваше присутствие!
        <br />
        Но мы будем рады, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
      </div>
      <div className={s.color_block}>
        <div className={s.item} style={{ backgroundColor: '#691027' }} />
        <div className={s.item} style={{ background: '#870708' }} />
        <div className={s.item} style={{ background: '#163782' }} />
        <div className={s.item} style={{ background: '#0C4639' }} />
        <div className={s.item} style={{ background: '#BB8F56' }} />
        <div className={s.item} style={{ background: '#918F6C' }} />
        <div className={s.item} style={{ background: '#E493BD' }} />
      </div>
    </div>
  )
}

export default DressCodeBlock
