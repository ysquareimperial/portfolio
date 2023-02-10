import React, { useState } from 'react'
import gmail from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
// import skills from '../images/skills.jpg'
// import education from '../images/education.jpg'
// import projects from '../images/projects.jpg'
// import resume from '../images/resume.jpg'
import resumee from '../cv.pdf'
import { AiOutlineClose } from 'react-icons/ai'
import bg from '../images/pbg.jpg'
import yasir from '../images/yasir.png'
import drugcipher from '../images/drugcipher.png'
import sanda from '../images/sanda.png'
import bitcoops from '../images/bitcoops.png'
import homes from '../images/homes.png'
import srecords from '../images/srecords.png'
// import moment from 'moment'
import { FiExternalLink } from 'react-icons/fi'
import { Col, Modal, ModalBody, Row } from 'reactstrap'
export default function AboutMe() {
  const [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(!open)
  }
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
    <div className="content_div">
      <div className="portfolio m-0 p-0"></div>
      <div className="clock_div text-white text-center">
        {/* <h1 className="clock">{moment(start).format('HH : MM')}</h1> */}
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* text to speech intro
      contact me bouncing */}
      {/* ////////////////////////////////////////////////////////////////////// */}
      <div className="">
        <Row className="m-0 p-0">
          <Col md={8} className="">
            <Row className="left_col">
              <Col md={6} className="image_div">
                <img src={yasir} className="yasir" alt="Yasir Ado Hassan" />
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
                  {/* <button className="know_more mt-2 mb-3" onClick={openModal}>
                  View list of projects
                </button> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="right_col p-3 mt-2 mb-5">
            <div>
              <div className="mee">
                <h4 style={{ fontWeight: 'bold' }}>Skills</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>ReactNative</li>
                </ul>
                <h4 style={{ fontWeight: 'bold' }}>Projects</h4>
                <button className="know_more mt-2 mb-3" onClick={openModal}>
                  View list of projects
                </button>
                <Modal isOpen={open} toggle={openModal} size="lg">
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight:20, marginTop:20 }}>
                    <AiOutlineClose onClick={openModal} size="2rem" style={{cursor:'pointer'}}/>
                  </div>
                  <ModalBody className="p-4">
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={drugcipher}
                          alt="DrugCipher"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">DrugCipher</p>
                        <p className="project_description">
                          Blockchain based anti-counterfeit system that allows
                          manufacturers to create and keep track of their
                          pharmaceutical products. It also allows consumers to
                          check the authenticity of a product.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://drugcipher.com/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                          >
                            https://drugcipher.com/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={sanda}
                          alt="Sand Tireda"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Sanda Tireda</p>
                        <p className="project_description">
                          Sanda Tireda Limited is a distribution and logistics
                          company headquartered in Kano, Nigeria.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://sandatireda.com/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                          >
                            https://sandatireda.com/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={bitcoops}
                          alt="Sand Tireda"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Bitcoops</p>
                        <p className="project_description">
                          BitCoop is the perfect app for managing your
                          cooperative society. Keep track of your members,
                          finances and operations with ease.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://bitcoops.com/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                          >
                            https://bitcoops.com/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={srecords}
                          alt="Sand Tireda"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">sRecords</p>
                        <p className="project_description">
                          sRecord is a web-based platform that helps teachers
                          generate students reports by creating classes,
                          subjects, students and records.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href=" https://srecord.vercel.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                          >
                            https://srecord.vercel.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={homes}
                          alt="Sand Tireda"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Homes</p>
                        <p className="project_description">
                          fdafasfasdf afsdfasdf fasdfas fadf fasf asf fasdf
                          afsdfasf afasdf afa fasdfasdf afasdfasa fasdf
                          adfasdfasdfadf adfasdfasdf
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href=" https://homes-three.vercel.app"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                          >
                            https://homes-three.vercel.app <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
                {/* <p className="m-0">Some of the projects I've worked on:</p>
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
                </ul> */}
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
            <img src={gmail} className="social_icons" alt="gmail" />
          </div>
        </a>
        <a href="https://www.github.com/ysquareimperial" target="_blank">
          <div>
            <img src={github} className="social_icons" alt="github" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-ado-hassan-670047223/"
          target="_blank"
        >
          <div>
            <img src={linkedin} className="social_icons" alt="linkedin" />
          </div>
        </a>
      </div>
    </div>
  )
}
