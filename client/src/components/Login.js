import React, { useEffect, useState } from "react";
import {Link,useNavigate,useSearchParams } from "react-router-dom";
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
     const history=useNavigate();
     const location =param.toString();
     const redirect =location.search()? location.search().split("=")[1] : "/";

     const dispatch= useDispatch();
     const userlogin=useSelector((state)=>state.userLogin);
     const {loading,error,userinfo}=userlogin;

     useEffect(() => {
       if(userinfo)
       {
          history(redirect)
       }
     
      
     }, [history,userinfo,redirect])
     
     const submitHandler=(e)=>
     {
          e.preventDefault();
          dispatch(userLogin(email,password));
     }
     return (
          <Container>
               <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                         <h1>Login</h1>
                         {error&&<Message variant='danger'>{error}</Message>}
                         {loading&&<Loader variant='success' message='Loading'/>}
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
                              New User?<Link to={"/register"}>
              Register
            </Link>
                              </Col>
                         </Row>
                    </Col>
               </Row>
          </Container>
     );
};

export default Login;
