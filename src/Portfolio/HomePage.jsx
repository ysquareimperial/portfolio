import React from "react";
import "./Portfolio.css";
import yasir from "../images/new-yasir.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const goto = useNavigate();
  return (
    <div className="content_div">
      <div className="img_div">
        <div>
          <img src={yasir} className="port_img shadow" alt="Yasir Ado Hassan" />
          <h1 className="port_name mt-3">Hi, my name is Yasir</h1>
          <button
            className="know_more mt-3 shadow"
            onClick={() => goto("/about-me")}
          >
            Know more about me!
          </button>
        </div>
      </div>
    </div>
  );
}
