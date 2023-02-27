import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColorSwitcher from "./ColorSwitcher";

export default function Header(props) {
  const { theme, setTheme } = props;
  return (
    <header className={"bg-light p-3 header"}>
      <Container>
        <Row className={["d-flex justify-content-between"]}>
          <Col>
            <div>
              <h1>contries api interface</h1>
            </div>
          </Col>
          <Col className={["d-flex justify-content-end"]}>
            <ColorSwitcher theme={theme} setTheme={setTheme} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
