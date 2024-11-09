import React from "react";
import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart"; // Assuming you have Cart component imported
import { useSelector } from "react-redux";

const AppNavbar = ({ toggleForm, showForm }) => {
  const { totalItemCount } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="justify-content-between">
          <Navbar.Brand as={NavLink} to="/" exact>
            The Generics
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies" exact activeClassName="active">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store" activeClassName="active">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-success"
            onClick={toggleForm}
            aria-label={showForm ? "Close Cart" : "Open Cart"}
          >
            Cart
            {totalItemCount > 0 && (
              <Badge bg="light" text="dark" className="ms-2">
                {totalItemCount}
              </Badge>
            )}
          </Button>
        </Container>
      </Navbar>

      {/* Conditional rendering for the Cart */}
      {showForm && <Cart onClose={toggleForm} />}
    </>
  );
};

export default AppNavbar;
