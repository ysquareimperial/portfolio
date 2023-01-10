import React from 'react'
import gmail from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
// import skills from '../images/skills.jpg'
// import education from '../images/education.jpg'
// import projects from '../images/projects.jpg'
// import resume from '../images/resume.jpg'
import resumee from '../cv.pdf'
import yasir from '../images/yasir.png'
// import moment from 'moment'
import { Col, Row } from 'reactstrap'
export default function AboutMe() {
  // const [open, setOpen] = useState(false)
  // const toggle = () => {
  //   setOpen(!open)
  // }
  // const start = moment().add(-4, 'm')
  // const detailsImages = [
  //   {
  //     source: skills,
  //   },
  //   {
  //     source: projects,
  //   },
  //   {
  //     source: education,
  //   },
  //   {
  //     source: resume,
  //   },
  // ]
  return (
    <div>
      <div className="portfolio m-0 p-0"></div>
      <div className="clock_div text-white text-center">
        {/* <h1 className="clock">{moment(start).format('HH : MM')}</h1> */}
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* text to speech intro
      contact me bouncing */}
      {/* ////////////////////////////////////////////////////////////////////// */}
      <div className="content_div">
        <Row className="m-0 p-0">
          <Col md={8} className="">
            <Row className="left_col">
              <Col md={6} className=''>
                <img src={yasir} className="yasir" />
              </Col>
              <Col md={6} className="">
                <div className="intro_div">
                  <h2 className="intro">Hi, I am a Frontend Engineer.</h2>
                  <p className="intro_para">
                    My name is Yasir Ado Hassan (ysquareimperial). I am a
                    Frontend Engineer with half a decade experience in web
                    development. I use frontend technologies to create solutions
                    to real-world problems.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="right_col p-3 mt-2">
            <div>
              <div className='mee'>
                <h4 style={{ fontWeight: 'bold' }}>Skills</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>ReactNative</li>
                </ul>
                <h4 style={{ fontWeight: 'bold' }}>Projects</h4>
                <p className="m-0">Some of the projects of I've worked on:</p>
                <ul>
                  <li>
                    <a
                      href="https://drugcipher.com/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      DrugCipher
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.bitcoops.com/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Bitcoops
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sandatireda.com/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Sanda Tireda
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://srecord.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      sRecords
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://voucher-app.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      e-Voucher
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://homes-three.vercel.app"
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Homes
                    </a>
                  </li>
                </ul>
                <h4 style={{ fontWeight: 'bold' }}>Education</h4>
                <ul>
                  <li>Diploma, Information Technology</li>
                  <li>B.Sc. Software Engineering</li>
                  <li>Masters Certificate in Cloud Architect </li>
                  <li>EF SET English Certificate</li>
                </ul>
                <h4 style={{ fontWeight: 'bold' }}>Resume</h4>
                <ul>
                  <li>
                    <a
                      href={resumee}
                      rel="noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <p className="contact_me">contact me</p>
      <div className="social_div">
        <a href="mailto:ysquare.theimperial@gmail.com" target="_blank">
          <div>
            <img src={gmail} className="social_icons" />
          </div>
        </a>
        <a href="https://www.github.com/ysquareimperial" target="_blank">
          <div>
            <img src={github} className="social_icons" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-ado-hassan-670047223/"
          target="_blank"
        >
          <div>
            <img src={linkedin} className="social_icons" />
          </div>
        </a>
      </div>
    </div>
  )
}
