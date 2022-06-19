import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I'm <span className="purple">Eugene Martsynenko </span>
            from <span className="purple"> Kyiv, Ukraine.</span>
            <br /> <span className="purple">Founder</span> / <span className="purple">Blockchain project manager</span> / <span className="purple">Full-stack blockchain developer</span>.
            <br />
            <br />
            Some of my other passions besides coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain hiking.
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike riding.
            </li>
            <li className="about-activity">
              <ImPointRight /> Snowboarding.
            </li>
            <li className="about-activity">
              <ImPointRight /> Long trips by car.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating 3D models and visualizations.
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing new products.
            </li>
          </ul>

          <p style={{ color: "#cfcfcf" }}>
            "Blockchain is a technology that has a huge impact on many areas and has the potential to change the world."{" "}
          </p>
          <footer className="blockquote-footer">Eugene</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
