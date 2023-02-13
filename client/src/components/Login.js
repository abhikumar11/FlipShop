import React, { useState } from "react";
import {Link,useSearchParams } from "react-router-dom";
import {
     Form,
     Row,
     Col,
     Button,
     Container,
     FormGroup,
     FormLabel,
     FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { userLogin } from "../actions/UserAction";
const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [param] = useSearchParams();
     const location =param.toString();
     const redirect =location.search()? location.search().split("=")[1] : "/";
     const submitHandler=(e)=>
     {
          e.preventDefault();
     }
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
                              <Button type="submit" variant="primary">Login</Button>
                         </Form>
                         <Row>
                              <Col>
                              New User? <Link to={redirect?`register?redirect=${redirect}`:'/register'}>Sign Up</Link>
                              </Col>
                         </Row>
                    </Col>
               </Row>
          </Container>
     );
};

export default Login;
