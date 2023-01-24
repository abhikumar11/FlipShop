import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
     return (
          <>
               <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                    <Container>
                         <LinkContainer to="/">
                              <Navbar.Brand>Flip Shop</Navbar.Brand>
                              </LinkContainer>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ml-auto">
                                   <LinkContainer to="/cart">
                                   <Nav.Link>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        &nbsp;Cart
                                   </Nav.Link>
                                   </LinkContainer>
                                   <LinkContainer to="/account">
                                   <Nav.Link>
                                        <i class="fa-solid fa-user"></i>
                                        &nbsp;Account
                                   </Nav.Link>
                                   </LinkContainer>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;
