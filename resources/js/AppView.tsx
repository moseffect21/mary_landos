import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from 'components/pages/MainPage'
import { GradientSVG } from 'components/common/GradientSVG'
import TablePage from 'components/pages/TablePage'
import GradientSVG2 from 'components/common/GradientSVG/GradientSVG2'

const AppView = () => {
  return (
    <div className="app-container">
      <div className="main-container">
        <Switch>
          <Route path="/list" exact>
            <TablePage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
      <GradientSVG idCSS="gradientSVG" startColor="#27395B" endColor="#060E23" rotation={0} />
      <GradientSVG2 />
    </div>
  )
}

export default AppView
