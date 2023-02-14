import React, { useEffect, useState } from "react";
import {
     Button,
     Col,
     Container,
     Form,
     FormControl,
     FormGroup,
     FormLabel,
     Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { userRegister } from "../actions/UserAction";
import Loader from "./Loader";
import Message from "./Message";
const Register = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmpassword, setConfirmPassword] = useState("");
     const [message,setMessage]=useState("");
     const [param] = useSearchParams();
     const history = useNavigate();
     const location = param.toString();
     const redirect = location.search() ? location.search().split("=")[1] : "/";
     const dispatch=useDispatch();
     const user=useSelector((state)=>state.userRegister);
     const {loading,error,userinfo}=user;
     const submitHandler = (e) => {
          e.preventDefault();
          if(password!==confirmpassword)
          {
                setMessage("Password do not match");
          }
          else
          {
            dispatch(userRegister(name,email,password));
          }
     };
     useEffect(() => {
      if(userinfo)
      {
         history(redirect)
      }
     
    }, [history,userinfo,redirect])
     
     return (
          <Container>
               <Row className="justify-content-md-center">
                    <Col md={6} xs={12}>
                         <h1>Sign Up</h1>
                         {error&&<Message variant='danger'>{error}</Message>}
                         {loading&&<Loader variant='success' message='Loading'/>}
                         <Form onSubmit={submitHandler}>
                              <FormGroup controlId="name">
                                   <FormLabel>Name</FormLabel>
                                   <FormControl
                                        type="text"
                                        valeu={name}
                                        onChange={(e) =>
                                             setName(e.target.value)
                                        }
                                   />
                              </FormGroup>
                              <FormGroup controlId="email">
                                   <FormLabel>Email</FormLabel>
                                   <FormControl
                                        type="email"
                                        valeu={email}
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
                                        onChange={(e) =>
                                             setPassword(e.target.value)
                                        }
                                   />
                                   </FormGroup>
                                   <FormGroup controlId="confirmpassword">
                                   <FormLabel>Password</FormLabel>
                                   <FormControl
                                        type="password"
                                        value={confirmpassword}
                                        onChange={(e) =>
                                          setConfirmPassword(e.target.value)
                                        }
                                   />
                              </FormGroup>
                              <Button type="submit" variant="primary">
                                   Sign Up
                              </Button>
                         </Form>
                         <Row>
                              <Col>
                                   Already Registered?
                                   <Link
                                        to={
                                             redirect
                                                  ? `login?redirect=${redirect}`
                                                  : "/login"
                                        }
                                   >
                                        Login
                                   </Link>
                              </Col>
                         </Row>
                    </Col>
               </Row>
          </Container>
     );
};

export default Register;
