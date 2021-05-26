import React, { useState } from 'react'
import ProgressBar from 'react-customizable-progressbar'

import s from './SecondBlock.scss'

const SecondBlock = () => {
  const [hours, setHours] = useState<number>(0)
  const [days, setDays] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  setInterval(() => {
    const date = new Date()
    const needDate = new Date('2021-06-25')
    const msPerDay = 86400 * 1000
    let dateDiff = needDate - date
    const day = Math.floor(dateDiff / msPerDay)
    dateDiff -= day * msPerDay
    const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24)
    dateDiff -= hours * (1000 * 60 * 60)
    const minutes = Math.floor(dateDiff / (1000 * 60))
    setDays(day)
    setHours(hours)
    setMinutes(minutes)
    // const dateDiff
  }, 1000)

  return (
    <div className={s.container}>
      <div className={s.timer_block}>
        <div className={s.title}>До свадьбы осталось</div>

        <div className={s.timer}>
          <div className={s.circle_container}>
            <ProgressBar
              className={s.circle_progress}
              progress={100 - (days / 35) * 100}
              radius={40}
              strokeWidth={8}
              trackStrokeWidth={2}
              initialAnimation
              transition="1s ease-in-out"
              strokeColor="url('#gradientSVG')"
              trackStrokeColor="url('#gradientSVG2')"
            />
            <div className={s.inner_content}>
              {days}
              <br />
              дней
            </div>
          </div>
          <div className={s.circle_container}>
            <ProgressBar
              className={s.circle_progress}
              progress={100 - (hours / 24) * 100}
              radius={40}
              strokeWidth={8}
              trackStrokeWidth={2}
              initialAnimation
              transition="1s ease-in-out"
              strokeColor="url('#gradientSVG')"
              trackStrokeColor="url('#gradientSVG2')"
            />
            <div className={s.inner_content}>
              {hours}
              <br />
              часов
            </div>
          </div>
          <div className={s.circle_container}>
            <ProgressBar
              className={s.circle_progress}
              progress={100 - (minutes / 60) * 100}
              radius={40}
              strokeWidth={8}
              trackStrokeWidth={2}
              initialAnimation
              transition="1s ease-in-out"
              strokeColor="url('#gradientSVG')"
              trackStrokeColor="url('#gradientSVG2')"
            />
            <div className={s.inner_content}>
              {minutes}
              <br />
              минут
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/images/image4.png" alt="" className={s.image} /> */}
    </div>
  )
}

export default SecondBlock
