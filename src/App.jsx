import { useState } from 'react'
import { Button } from 'reactstrap'
import reactLogo from './assets/react.svg'
import AboutMe from './Portfolio/AboutMe'
import HomePage from './Portfolio/HomePage'
import Portfolio from './Portfolio/HomePage'
import AppNavigation from './Routes/AppNavigation'

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* <AboutMe/> */}
      <AppNavigation />
    </div>
  )
}

export default App
