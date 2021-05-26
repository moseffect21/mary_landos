import React from 'react'

import DressCodeBlock from './components/DressCodeBlock'
import FirstBlock from './components/FirstBlock'
import FiveBlock from './components/FiveBlock'
import FourthBlock from './components/FourthBlock'
import SecondBlock from './components/SecondBlock'
import SixBlock from './components/SixBlock'
import ThirdBlock from './components/ThirdBlock'
import s from './MainPage.scss'

const MainPage = () => {
  return (
    <div className={s.container}>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <DressCodeBlock />
      <FiveBlock />
      <SixBlock />
    </div>
  )
}

export default MainPage
