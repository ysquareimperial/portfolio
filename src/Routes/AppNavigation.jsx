import React from 'react'
import AboutMe from '../Portfolio/AboutMe'
import HomePage from '../Portfolio/HomePage'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        {
          path: '/about-me',
          element: <AboutMe />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
