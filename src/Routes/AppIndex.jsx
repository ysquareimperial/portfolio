import React from 'react'
import { Outlet } from 'react-router-dom'
export default function AppIndex() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
