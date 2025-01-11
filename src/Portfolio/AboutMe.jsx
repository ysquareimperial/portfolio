import React, { useState } from "react";
import gmail from "../images/email.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resumee from "../001 - Yasir Ado Hassan - Resume.pdf";
// import resumee from "../Ado Yasir Hassan CV.pdf";
import { AiOutlineClose } from "react-icons/ai";
import yasir from "../images/yasss.png";
import srecords from "../images/srecords.png";
import hotostash from "../images/hotostash.png";
import transapp from "../images/transapp.png";
import know from "../images/knowtify.png";
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
                  <h2 className="intro">Hi, I am a Software Engineer.</h2>
                  <p className="intro_para">
                    {/* I am Yasir Ado Hassan, professionally known as
                    'ysquareimperial.' As a Frontend Software Engineer, I have
                    three years of hands-on experience in web development. My
                    expertise lies in leveraging cutting-edge frontend
                    technologies to craft innovative solutions for real-world
                    challenges. */}
                    Hello, I'm Yasir Ado Hassan, a Software Engineer and RPA
                    Developer with three years of experience. I specialize in
                    creating responsive interfaces and automating processes to
                    enhance efficiency. With a passion for crafting seamless
                    user experiences and driving innovation, I am eager to bring
                    my expertise to impactful projects.
                  </p>
                  {/* <img
                    src="https://www.codewars.com/users/ysquareimperial/badges/small"
                    alt=""
                  /> */}
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
                  <li style={{ fontSize: 12 }}>HTML & CSS</li>
                  {/* <li style={{fontSize:12}}>CSS</li> */}
                  <li style={{ fontSize: 12 }}>Material UI</li>
                  <li style={{ fontSize: 12 }}>Tailwind CSS</li>
                  {/* <li style={{ fontSize: 12 }}>UX/UI</li> */}
                  <li style={{ fontSize: 12 }}>JavaScript & TypeScript</li>
                  {/* <li style={{fontSize:12}}>TypeScript</li> */}
                  <li style={{ fontSize: 12 }}>ReactJS & NextJS</li>
                  <li style={{ fontSize: 12 }}>React Native with Expo</li>
                  {/* <li style={{fontSize:12}}>NextJs</li> */}
                  <li style={{ fontSize: 12 }}>Redux</li>
                  <li style={{ fontSize: 12 }}>API Integration</li>
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
                      justifyContent: "space-between",
                    }}
                    className="p-3"
                  >
                    <h4>Projects</h4>
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
                          src={hotostash}
                          alt="hotostash"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Hotostash</p>
                        <p className="project_description">
                          Hotostash is an innovative platform where users can
                          create albums, invite friends and family, organize
                          events, and manage contributions seamlessly. It
                          enables users to upload, share, and download event
                          photos, ensuring memories are stashed forever. With
                          features like transparent contributions,
                          consensus-based fund release, and the ability to
                          auto-generate event invitation cards, Hotostash
                          combines convenience and collaboration for weddings,
                          birthdays, parties, and more. Slogan: Your Treasure
                          Foreva!
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://www.hotostash.com/auth"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://hotstash.com/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
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
                            href="https://drugcipher.vercel.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://drugcipher.vercel.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src="https://res.cloudinary.com/dx5ilizca/image/upload/v1708447848/mylikita_drkeyl.jpg"
                          alt="mylikita"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">MyLikita</p>
                        <p className="project_description">
                          Mylikita is a project focused on creating a
                          personalized e-commerce platform for beauty and
                          cosmetic products. As a frontend engineer, my role
                          involved developing and enhancing the user interface,
                          implementing features to optimize product browsing and
                          purchasing, and ensuring cross-browser compatibility.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://mylikita.com/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://mylikita.com/ <FiExternalLink />
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
                          src={srecords}
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
                            href="https://srecord.netlify.app/"
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
                    {/* <Row>
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
                    </Row> */}
                    {/* <hr /> */}
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
                          src={transapp}
                          alt="transapp"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Trans App</p>
                        <p className="project_description">
                          TransApp is a ride-booking app for interstate travel,
                          offering users a seamless way to schedule rides,
                          choose vehicle types, and pay securely. With features
                          like live tracking and verified drivers, it ensures
                          safe and convenient long-distance travel.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://transappng.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://transappng.netlify.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6} className="p-2">
                        <img
                          src={know}
                          alt="knowtify"
                          className="project_image shadow"
                        />
                      </Col>
                      <Col md={6} className="p-2">
                        <p className="project_title">Knowtify</p>
                        <p className="project_description">
                          Knowtify is an app designed to disseminate vital
                          information to farmers, providing them with knowledge
                          on farming techniques, best practices, and market
                          trends for farm produce. It empowers farmers with
                          real-time updates, weather forecasts, and expert
                          advice to enhance productivity and improve
                          decision-making in agriculture.
                        </p>
                        <p className="project_link">
                          <a
                            className="shadow"
                            href="https://knowtify.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            https://knowtify.netlify.app/ <FiExternalLink />
                          </a>
                        </p>
                      </Col>
                    </Row>
                    {/* <Row>
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
                            https://fwd-assessment.vercel.app/{" "}
                            <FiExternalLink />
                          </a>
                        </p>
                      </Col> 
                  </Row>*/}
                  </ModalBody>
                </Modal>
                <h4 style={{ fontWeight: "bold" }}>Education</h4>
                <ul>
                  <li>Diploma, Information Technology</li>
                  <li>B.Sc. Software Engineering</li>
                  <li>Masters Certificate in Cloud Architect </li>
                  <li>EF SET English Certificate</li>
                </ul>
                <h4 style={{ fontWeight: "bold" }}>
                  Resume{" "}
                  <span style={{ fontWeight: "normal", fontSize: 14 }}>
                    (To see full details)
                  </span>
                </h4>
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
        <a href="https://www.linkedin.com/in/ysquareimperial/" target="_blank">
          <div>
            <img src={linkedin} className="social_icons" alt="linkedin" />
          </div>
        </a>
      </div>
    </div>
  );
}
