import React, { useState } from "react";
import {
     Container,
     Row,
     Col,
     Form,
     FormGroup,
     FormLabel,
     FormControl,
     Button,
} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {userShippingAddress} from "../actions/CartAction";
const Shipping = () => {
     const cart = useSelector((state) => state.cart);
     const { shippingAddress } = cart;
     const [address, setAddress] = useState(shippingAddress.address);
     const [city, setCity] = useState(shippingAddress.city);
     const [pin, setPin] = useState(shippingAddress.pin);
     const [country, setCountry] = useState(shippingAddress.country);
    const dispatch=useDispatch();
    const history=useNavigate();
     const submitHandler = (e) => {
          e.preventDefault();
          dispatch(userShippingAddress({address,city,pin,country}));
          history("/payment");
     };
     return (
          <Container>
               <Row className="justify-content-md-center">
                    <Col md={6} xs={12}>
                         <Form onSubmit={submitHandler}>
                              <FormGroup controlId="address">
                                   <FormLabel>Address</FormLabel>
                                   <FormControl
                                        type="text"
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={(e) =>
                                             setAddress(e.target.value)
                                        }
                                        required
                                   ></FormControl>
                              </FormGroup>
                              <FormGroup controlId="city">
                                   <FormLabel>City</FormLabel>
                                   <FormControl
                                        type="text"
                                        placeholder="Enter City"
                                        value={city}
                                        onChange={(e) =>
                                             setCity(e.target.value)
                                        }
                                        required
                                   ></FormControl>
                              </FormGroup>
                              <FormGroup controlId="pin">
                                   <FormLabel>Postal Code</FormLabel>
                                   <FormControl
                                        type="text"
                                        placeholder="Enter Pin Code"
                                        value={pin}
                                        onChange={(e) => setPin(e.target.value)}
                                        required
                                   ></FormControl>
                              </FormGroup>
                              <FormGroup controlId="country">
                                   <FormLabel>Country</FormLabel>
                                   <FormControl
                                        type="text"
                                        placeholder="Enter Country"
                                        value={country}
                                        onChange={(e) =>
                                             setCountry(e.target.value)
                                        }
                                        required
                                   ></FormControl>
                              </FormGroup>
                              <Button type="submit" variant="primary">
                                   Continue
                              </Button>
                         </Form>
                    </Col>
               </Row>
          </Container>
     );
};

export default Shipping;
