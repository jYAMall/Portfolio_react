import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="sticky">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT</span> ME
            </h1>
            <p className="home-about-body">
            Technology fascinates me, and I'm quite well-versed in what I like. 
            My favorite thing is to create stuff. I've got valuable experience 
            in managing startup projects and doing business.
              <br />
              <br />According to me, <b className="purple">blockchain technology</b> will drive the quantum development of technology and <b className="purple">Web3</b>. It will impact everything from world orders to our everyday lives in a significant way.
              <br />
              <br /><b className="purple">Solidity</b>, <b className="purple">Javascript</b>, and <b className="purple">Python</b> are among the languages I use and continue to learn for improving.
              <br />
              <br />In my area of expertise, I create new web technologies and decentralized products, such as <b className="purple">DAO</b>, <b className="purple">NFT</b>, <b className="purple">DeFi</b>, <b className="purple">DEX</b>, <b className="purple">Smart Contracts</b>, and <b className="purple">Cryptocurrencies</b>.
              <br />
              <br />Continual improvement and gaining new knowledge are my main objectives.
              <br />
              <br />I enjoy sharing my experiences and taking on the experiences of others.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's be internet BFFs</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jYAMall"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/eugene_udeepy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eugene-martsynenko-960069192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
