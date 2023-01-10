import React from 'react'
import './Portfolio.css'
import yasir from '../images/yasir.png'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const goto = useNavigate()
  return (
    <div>
      <div className="portfolio m-0 p-0"></div>
      <div className="img_div">
        <img src={yasir} className="port_img shadow" />
        <h1 className="port_name mt-3">I am a Frontend Engineer</h1>
        <button className="know_more mt-3" onClick={() => goto('/about-me')}>
          Know more about me!
        </button>
      </div>
    </div>
  )
}
