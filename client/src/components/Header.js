import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
     return (
          <>
               <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                    <Container>
                         <Navbar.Brand>Flip Shop</Navbar.Brand>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ml-auto">
                                   <Nav.Link>
                                   <i class="fa-solid fa-cart-shopping"></i>
                                    &nbsp;Cart
                                    </Nav.Link>
                                   <Nav.Link>
                                   <i class="fa-solid fa-user"></i>
                                   &nbsp;Account
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;
