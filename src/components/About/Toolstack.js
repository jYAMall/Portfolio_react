import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiChainlink,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiGithubBadge,
} from "react-icons/di";
import {
  FaEthereum,
  FaHardHat,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChainlink />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
      </Col>
    </Row>
  );
}

export default Toolstack;
