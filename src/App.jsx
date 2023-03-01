import { useState } from 'react'
import { Button } from 'reactstrap'
import reactLogo from './assets/react.svg'
import ClockMe from './AddingItem'
import AboutMe from './Portfolio/AboutMe'
import HomePage from './Portfolio/HomePage'
import Portfolio from './Portfolio/HomePage'
import AppNavigation from './Routes/AppNavigation'
import RemovingItem from './RemovingItem'
import ReplacingItems from './ReplacingItems'
import AddingItem from './AddingItem'
import ShoppingCart from './ShoppingCart'

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* <AboutMe/> */}
      <AppNavigation />
      {/* <RemovingItem/> */}
      {/* <ReplacingItems/> */}
      {/* <ShoppingCart/> */}
    </div>
  )
}

export default App
