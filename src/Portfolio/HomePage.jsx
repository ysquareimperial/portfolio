import React from 'react'
import './Portfolio.css'
import yasir from '../images/yasir.png'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const goto = useNavigate()
  // function goto(){
  //   return useNavigate()
  // }
  return (
    <div className="content_div">
      <div className="img_div">
        <div>
          <img src={yasir} className="port_img shadow" alt="Yasir Ado Hassan" />
          <h1 className="port_name mt-3">I am a Frontend Engineer</h1>
          <button className="know_more mt-3" onClick={() => goto('/about-me')}>
            Know more about me!
          </button>
        </div>
      </div>
    </div>
  )
}
