import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/UserAction";
const Header = () => {
     const userlogin = useSelector((state) => state.userLogin);
     const { userinfo } = userlogin;
     const dispatch = useDispatch();

     const logoutHandler = () => {
          dispatch(userLogout());
     };
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
                                   {userinfo ? (
                                        <NavDropdown title={userinfo.name}>
                                             <LinkContainer to="/profile">
                                                  <NavDropdown.Item>
                                                       Profile
                                                  </NavDropdown.Item>
                                             </LinkContainer>
                                             <NavDropdown.Item
                                                  onClick={logoutHandler}
                                             >
                                                  Logout
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                   ) : (
                                        <LinkContainer to="/login">
                                             <Nav.Link>
                                                  <i className="fas fa-user"></i>
                                                  &nbsp; Login
                                             </Nav.Link>
                                        </LinkContainer>
                                   )}
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;
