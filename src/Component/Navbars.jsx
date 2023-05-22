import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <button>
          <Link to="/">Home</Link>
        </button>
        <Nav className="me-auto">
          <button>
            <Link to="about">About</Link>
          </button>
          <button>
            <Link to="contact">Contact</Link>
          </button>
        </Nav>
        <button>
          <Link to="items">Items</Link>
        </button>
        <button>
          <Link to="itemsDetails">ItemsDetails</Link>
        </button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
