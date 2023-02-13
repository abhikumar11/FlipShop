import React, { useState } from "react";
import Link from "react-router-dom";
import {
     Form,
     Row,
     Col,
     Button,
     Container,
     FormGroup,
     FormLabel,
     FormText,
     FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { userLogin } from "../actions/UserAction";
const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     return (
          <Container>
               <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                         <h1>Login</h1>
                         <Form onSubmit={submitHandler}>
                              <FormGroup controlId="email">
                                   <FormLabel>E-Mail</FormLabel>
                                   <FormControl
                                        type="email"
                                        value={email}
                                        placeholder="Enter email address"
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                   />
                              </FormGroup>
                              <FormGroup controlId="password">
                                   <FormLabel>Password</FormLabel>
                                   <FormControl
                                        type="password"
                                        value={password}
                                        placeholder="Enter password"
                                        onChange={(e) =>
                                             setPassword(e.target.value)
                                        }
                                   />
                              </FormGroup>
                         </Form>
                    </Col>
               </Row>
          </Container>
     );
};

export default Login;
