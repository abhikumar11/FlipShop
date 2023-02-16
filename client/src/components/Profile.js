import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
     Button,
     Col,
     Form,
     FormControl,
     FormGroup,
     FormLabel,
     Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUserDetails } from "../actions/UserAction";
import Loader from "./Loader";
import Message from "./Message";
const Profile = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [message, setMessage] = useState("");
     const history = useNavigate();
     const dispatch = useDispatch();
     const userdetail = useSelector((state) => state.userDetail);
     const { loading, error, user } = userdetail;
     const userlogin = useSelector((state) => state.userLogin);
     const { userinfo } = userlogin;
     const update = useSelector((state) => state.userUpdate);
     const { success } = update;
     useEffect(() => {
          if (!userinfo) {
               history("/login");
          } else {
               if (!user.name) {
                    dispatch(getUserDetails());
               } else {
                    setName(user.name);
                    setEmail(user.email);
               }
          }
     }, [history, userinfo, user, dispatch]);

     const submitHandler = (e) => {
          e.preventDefault();
          dispatch(updateUserDetails({ id: user._id, name, email, password }));
     };
     return (
          <>
               <Row>
                    <Col md={3}>
                         <h4>User Profile</h4>
                         {error && <Message varient="danger">{error}</Message>}
                         {success && (
                              <Message variant="success">
                                   Profile Updated
                              </Message>
                         )}
                         {loading && <Loader />}
                         {message && (
                              <Message variant="danger">{message}</Message>
                         )}
                         <Form onSubmit={submitHandler}>
                              <FormGroup controlId="email">
                                   <FormLabel>Name</FormLabel>
                                   <FormControl
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) =>
                                             setName(e.target.value)
                                        }
                                   ></FormControl>
                              </FormGroup>
                              <FormGroup controlId="email">
                                   <FormLabel>Email Address</FormLabel>
                                   <FormControl
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                   ></FormControl>
                              </FormGroup>
                              <FormGroup controlId="password">
                                   <FormLabel>Password</FormLabel>
                                   <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) =>
                                             setPassword(e.target.value)
                                        }
                                   ></Form.Control>
                              </FormGroup>
                              <FormGroup controlId="confirmPassword">
                                   <FormLabel>Confirm Password</FormLabel>
                                   <FormControl
                                        type="password"
                                        placeholder="Re-enter Password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                             setConfirmPassword(e.target.value)
                                        }
                                   ></FormControl>
                              </FormGroup>
                              <Button type="submit" varient="primary">
                                   Update
                              </Button>
                         </Form>
                    </Col>
               </Row>
          </>
     );
};

export default Profile;
