import React, { useState } from "react";
import gmail from "../images/email.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resumee from "../cv.pdf";
import { AiOutlineClose } from "react-icons/ai";
import yasir from "../images/new-yasir.png";
import { FiExternalLink } from "react-icons/fi";
import { Col, Modal, ModalBody, Row } from "reactstrap";
export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  return (
    <div className="content_div">
      <div className="portfolio m-0 p-0"></div>
      <div className="">
        <Row className="m-0 p-0">
          <Col md={8} className="">
            <Row className="left_col">
              <Col md={6} className="image_div">
                <img
                  src={yasir}
                  className="yasir shadow"
                  alt="Yasir Ado Hassan"
                />
              </Col>
              <Col md={6} className="">
                <div className="intro_div">
                  <h2 className="intro">
                    Hi, I am a Frontend Software Engineer.
                  </h2>
                  <p className="intro_para">
                    My name is Yasir Ado Hassan (ysquareimperial). I am a
                    Frontend Software Engineer with half a decade experience in
                    web development. I use frontend technologies to create
                    solutions to real-world problems.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="right_col p-3 mt-2 mb-5">
            <div>
              <div className="mee">
                <h4 style={{ fontWeight: "bold" }}>Skills</h4>
                <ul>
                  {/* <li style={{fontSize:12}}>UI/UX</li> */}
                  <li style={{fontSize:12}}>HTML & CSS</li>
                  {/* <li style={{fontSize:12}}>CSS</li> */}
                  <li style={{fontSize:12}}>Bootstrap</li>
                  <li style={{fontSize:12}}>Material UI</li>
                  <li style={{fontSize:12}}>JavaScript & TypeScript</li>
                  {/* <li style={{fontSize:12}}>TypeScript</li> */}
                  <li style={{fontSize:12}}>ReactJS & NextJS</li>
                  {/* <li style={{fontSize:12}}>NextJs</li> */}
                  <li style={{fontSize:12}}>Redux</li>
                  <li style={{fontSize:12}}>API Integration</li>
                  {/* <li style={{fontSize:12}}>Github</li> */}
                </ul>
                <h4 style={{ fontWeight: "bold" }}>Projects</h4>
                <button className="know_more mt-2 mb-3" onClick={openModal}>
                  Some of my projects
                </button>
                <Modal isOpen={open} toggle={openModal} size="lg">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: 20,
                      marginTop: 20,
                    }}
                  >
                    <AiOutlineClose
                      onClick={openModal}
                      size="2rem"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <ModalBody className="p-4">
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1677655667/drugcipher_rjrzda.png"
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
                            style={{ textDecoration: "none" }}
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
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1677655654/sanda_jkqyvd.png"
                          alt="Sanda Tireda"
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
                            style={{ textDecoration: "none" }}
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
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1677655656/bitcoops_nlmogy.png"
                          alt="Bitcoops"
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
                            style={{ textDecoration: "none" }}
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
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1677655922/srecords_d21wnj.png"
                          alt="sRecords"
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
                            style={{ textDecoration: "none" }}
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
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1677655649/homes_xajfyz.png"
                          alt="Homes"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Homes</p>
                        <p className="project_description">
                          Home Real Estate: A trusted partner for expert
                          guidance in buying, selling, and investing in real
                          estate.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href=" https://homes-three.vercel.app"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://homes-three.vercel.app <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1695938065/cygio_xgedq2.png"
                          alt="cygio"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Cygio</p>
                        <p className="project_description">
                          Cygio is Africa’s largest social management platform,
                          combining the power of social creation, social
                          listening, and influncer marketing to enable in-house
                          brands build the ultimate customer experience.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://cygio.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://cygio.netlify.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1695938574/du-it_avybad.png"
                          alt="Du-it"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Du-it</p>
                        <p className="project_description">
                          The Du-it app, built with React.js, simplifies task
                          management for staffs, making workdays more efficient
                          and collaborative.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://du-it.vercel.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://du-it.vercel.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1695939311/fwd_afvhxi.png"
                          alt="Weather"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Weather UI</p>
                        <p className="project_description">
                          Discover the weather like never before with the
                          React-powered UI. Get real-time updates in a sleek and
                          user-friendly interface. Stay informed and make the
                          most of your day.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://fwd-assessment.vercel.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://fwd-assessment.vercel.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
                <h4 style={{ fontWeight: "bold" }}>Education</h4>
                <ul>
                  <li>Diploma, Information Technology</li>
                  <li>B.Sc. Software Engineering</li>
                  <li>Masters Certificate in Cloud Architect </li>
                  <li>EF SET English Certificate</li>
                </ul>
                <h4 style={{ fontWeight: "bold" }}>Resume</h4>
                <button className="know_more mt-2 mb-3">
                  <a
                    href={resumee}
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                    // style={{ textDecoration: "none", color:'rgba(99, 4, 44, 1)'}}
                  >
                    View Resume
                  </a>
                </button>
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
  );
}
