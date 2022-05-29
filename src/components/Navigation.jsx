import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Event Finder</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
