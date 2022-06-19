import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import product_ver from "../../Assets/Projects/product_ver.png";
import calypso from "../../Assets/Projects/calypso.png";
import unfake from "../../Assets/Projects/unfake.png";
import ludbeat from "../../Assets/Projects/ludbeat.png";
import udeepy from "../../Assets/Projects/udeepy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MY RECENT <strong className="purple">WORKS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unfake}
              isBlog={false}
              title="Unfake"
              description="Unfake is the first anticounterfeiting solution that uses blockchain technology and the newest NFC DNA tags. Our user-friendly and easy-to-use solution can prevent counterfeiting of protected products with a 100% accuracy rate."
              link="https://unfake.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ludbeat}
              isBlog={false}
              title="Ludbeat"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://www.indiegogo.com/projects/ludbeat-bone-conduction-wireless-headphones#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calypso}
              isBlog={false}
              title="Calypso"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://calypsoproducts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product_ver}
              isBlog={false}
              title="Product verification"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://apeincorp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udeepy}
              isBlog={false}
              title="Udeepy"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://calypsoproducts.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
